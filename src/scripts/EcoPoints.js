// Variables
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

client.setOperator(myAccountId, PrivateKey.fromString(myPrivateKey));
client.setDefaultMaxTransactionFee(new Hbar(100));

// Functions
function createToken(id, metaData) {
    const tokenCreateTx = new TokenCreateTransaction()
        .setTokenName(id)
        .setTokenSymbol("ID")
        .setTokenType(TokenType.NonFungibleUnique) // Set the token type to Non-Fungible Unique
        .setSupplyType(TokenSupplyType.Finite) // Set the supply type to finite
        .setMaxSupply(1) // Set max supply to 1 for uniqueness
        .setTreasuryAccountId(myAccountId)
        .setAdminKey(PrivateKey.fromString(myPrivateKey).publicKey)
        .setSupplyKey(PrivateKey.fromString(myPrivateKey).publicKey)
        .setTokenMemo(metaData) // Set metadata as token memo (Note: This is a simple string field)
        .freezeWith(client);

    return tokenCreateTx.sign(PrivateKey.fromString(myPrivateKey))
        .then(signedTx => signedTx.execute(client))
        .then(txResponse => txResponse.getReceipt(client))
        .then(receipt => {
            if (receipt.status.toString() === "SUCCESS") {
                return receipt.tokenId.toString();
            } else {
                throw new Error(`Token creation failed with status: ${receipt.status}`);
            }
        })
        .catch(error => {
            console.error("Error creating token:", error);
            throw error;
        });
}


// This function will return the amount of EcoPoints a user(token) has, given the user's email
function getEcoPoints(email)
{
    return 0;
}

// This function will add EcoPoints to a user's corresponding token, given the user's email and the amount of EcoPoints to be added
// It will return the resulting amount of EcoPoints the user has
function addEcoPoints(email, amount)
{
    return 0;
}

// This function will subtract EcoPoints to a user's corresponding token, given the user's email and the amount of EcoPoints to be added
// It will return the resulting amount of EcoPoints the user has
function subtractEcoPoints(email, amount)
{
    return 0;   
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

// This function will create a token for a user given their email, and sets initial EcoPoints metadata to 0
// It will return a boolean value that represents success or failure