document.addEventListener('DOMContentLoaded', () => {
    //const connectWalletButton = document.getElementById=("connectWallet")
    //const checkTokenButton = document.getElementById('checkToken');
    //const createTransactionButton = document.getElementById('createTransaction');

    main();
    //checkTokenButton.addEventListener('click', checkToken);
    //createTransactionButton.addEventListener('click', createTransaction);
});

async function check_params() {
    var error = 0;
    if (error == 0 && typeof window.unisat === 'undefined') {error = 100;}
    if (error == 0) {
        try {let accounts = await window.unisat.requestAccounts();}
        catch (e) {error = 200;}
    }
    return accounts
}

async function main() {
    console.log("> Hello world !");

    // 1 - est-ce que l'extension est présente ?
    accounts = check_params().then(() => {
        console.log(accounts);
    });

    console.log("< Bye wolrd !")
}
