import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Hedera Set up
const { Client, PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar, TransferTransaction } = require("@hashgraph/sdk");
const myAccountId = "0.0.5947923";
const myPrivateKey = "3030020100300706052b8104000a04220420e9c5a05be4b1dcd3e722fba6b450b0da72b99c8783e072c1a37fbaa52a1e24f5";
const client = Client.forTestnet();

async function environmentSetup() {

    // If we weren't able to grab it, we should throw a new error
    if (!myAccountId || !myPrivateKey) {
        throw new Error("Environment variables MY_ACCOUNT_ID and MY_PRIVATE_KEY must be present");
    }
}
environmentSetup();
client.setOperator(myAccountId, myPrivateKey);
client.setDefaultMaxTransactionFee(new Hbar(100));