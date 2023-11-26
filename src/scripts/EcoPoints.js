const myAccountId = "0.0.5947923";
const myPrivateKey = "3030020100300706052b8104000a04220420e9c5a05be4b1dcd3e722fba6b450b0da72b99c8783e072c1a37fbaa52a1e24f5";
const { 
    Client, 
    PrivateKey, 
    TokenCreateTransaction, 
    TokenType, 
    TokenSupplyType, 
    Hbar 
} = require("@hashgraph/sdk");
const client = Client.forTestnet();
const { TokenInfoQuery } = require("@hashgraph/sdk");
client.setOperator(myAccountId, PrivateKey.fromString(myPrivateKey));
client.setDefaultMaxTransactionFee(new Hbar(100));


/* Functions */

/**
 * Retrieves the token ID associated with a given username.
 * @param {string} username - The username for which to retrieve the token ID.
 * @returns {string} - The token ID associated with the username.
 */
function getTokenIdByUsername(username) {
    const fs = require("fs");
    const jsonString = fs.readFileSync("src/scripts/tokens.json", "utf8");
    const tokens = JSON.parse(jsonString);
    return tokens[username].tokenId;
}


/**
 * Creates a token with the given username.
 * @param {string} username - The username for the token.
 * @returns {Promise<string|boolean>} - The token ID if successful, otherwise false.
 */
async function createToken(username) {

    // Create the token
    const tokenCreateTx = new TokenCreateTransaction()
        .setTokenName(username)
        .setTokenSymbol("ECO")
        .setTokenType(TokenType.FungibleCommon) // Fungible token
        .setSupplyType(TokenSupplyType.Finite)
        .setMaxSupply(1000000) // Set a max supply limit
        .setInitialSupply(1) // Initial supply representing 1 EcoPoint
        .setTreasuryAccountId(myAccountId)
        .setAdminKey(PrivateKey.fromString(myPrivateKey).publicKey)
        .setSupplyKey(PrivateKey.fromString(myPrivateKey).publicKey)
        .freezeWith(client);

    try {

        // Sign with the token's admin key and submit to a Hedera network
        const signedTx = await tokenCreateTx.sign(PrivateKey.fromString(myPrivateKey));
        const txResponse = await signedTx.execute(client);
        const receipt = await txResponse.getReceipt(client);
        const tokenId = receipt.tokenId.toString();
        const tokenInfo = await new TokenInfoQuery()
            .setTokenId(tokenId)
            .execute(client);
        const tokenJson = {
            "tokenName": tokenInfo.tokenName,
            "tokenSymbol": tokenInfo.tokenSymbol,
            "tokenId": tokenId
        };
        
        // Write token info to tokens.json
        const fs = require("fs");
        fs.readFile("src/scripts/tokens.json", "utf8", (err, jsonString) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.log('File does not exist, creating a new one');
                    fs.writeFile("src/scripts/tokens.json", JSON.stringify({[username]: tokenJson}), err => {
                        if (err) {
                            console.error("Error writing file:", err);
                            return;
                        }
                    });
                } else {
                    console.error("Error reading file:", err);
                }
                return;
            }
            try {
                const tokens = JSON.parse(jsonString);
                tokens[username] = tokenJson;
                fs.writeFile("src/scripts/tokens.json", JSON.stringify(tokens), err => {
                    if (err) {
                        console.error("Error writing file:", err);
                        return;
                    }
                });
            } catch (parseErr) {
                console.error("Error parsing JSON:", parseErr);
            }
        });
        return receipt.status.toString() === "SUCCESS" ? receipt.tokenId.toString() : false;
    } catch (error) {
        console.error("Error creating token:", error);
        return false;
    }
}


/**
 * Retrieves the EcoPoints balance for a given username.
 * @param {string} username - The username to retrieve the EcoPoints balance for.
 * @returns {Promise<number>} - The EcoPoints balance.
 */
async function getEcoPoints(username) {
    const tokenId = await getTokenIdByUsername(username); // Retrieves the token ID

    try {
        const balanceQuery = new AccountBalanceQuery()
            .setAccountId(username);
        const balance = await balanceQuery.execute(client);

        return balance.tokens._map.get(tokenId) || 0;
    } catch (error) {
        console.error("Error getting EcoPoints:", error);
        return 0;
    }
}

/**
 * Adds eco points to a user's account.
 * @param {string} username - The username of the user.
 * @param {number} amount - The amount of eco points to add.
 * @returns {Promise<boolean>} - A promise that resolves to true if the eco points were added successfully, false otherwise.
 */
async function addEcoPoints(username, amount) {
    const tokenId = await getTokenIdByUsername(username); // Retrieves the token ID

    try {
        const mintTx = new TokenMintTransaction()
            .setTokenId(tokenId)
            .setAmount(amount)
            .freezeWith(client);
        const signTx = await mintTx.sign(PrivateKey.fromString(myPrivateKey));
        const txResponse = await signTx.execute(client);
        const receipt = await txResponse.getReceipt(client);

        return receipt.status.toString() === "SUCCESS";
    } catch (error) {
        console.error("Error adding EcoPoints:", error);
        return false;
    }
}

async function subtractEcoPoints(username, amount) {
    const tokenId = await getTokenIdByUsername(username); // Retrieves the token ID

    try {
        const burnTx = new TokenBurnTransaction()
            .setTokenId(tokenId)
            .setAmount(amount)
            .freezeWith(client);
        const signTx = await burnTx.sign(PrivateKey.fromString(myPrivateKey));
        const txResponse = await signTx.execute(client);
        const receipt = await txResponse.getReceipt(client);

        return receipt.status.toString() === "SUCCESS";
    } catch (error) {
        console.error("Error subtracting EcoPoints:", error);
        return false;
    }
}


/**
 * Calculates the discount based on the given eco points.
 * @param {number} ecopoints - The number of eco points.
 * @returns {number} The discount amount.
 */
function getDiscount(ecopoints)
{
    return ecopoints * 0.025;
}

export { createToken, getEcoPoints, addEcoPoints, subtractEcoPoints, getDiscount };


/*

The functions in this file are to be implemented by Vignesh Saravanakumar

You will need to download Node if you haven't already(https://nodejs.org/en/download)

Run the project by executing "npm start" in the terminal
Ctrl-C to terminate the project

Go to http://localhost:3000/test to test out the functions
The parameters can be edited in pages/Test.js

Start by creating a new branch called "ecopoints-dev"
Commit often, and add concise, professional commit messages
They should have all "important" words capitalized, such as the following:
"Implemented the getData Function"
You can see the messages of existing commits for more examples

This Hedera Node tutorial is a great place to begin
https://www.youtube.com/watch?v=JZDAMScxbpU

Specific instructions detailing what each function does can be found above the function
Delete them after completing the corresponding function

You may have to modify the functions a little bit so that they work with Hedera and blockchain
Make sure the main idea is still there if you do\

Delete this message after the work is done, just before merging

Have fun!

*/