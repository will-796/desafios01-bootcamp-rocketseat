function createTransaction(transaction) {
    user.transactions.push(transaction)
    if (transaction.type == "credit") {
        operation = operation + transaction.value;
        return operation;
    } else {
        operation = operation - transaction.value;
        return operation;
    }
}

function getAverageTransactionValue() {
    let sum = 0;
    for (let transaction of user.transactions) {
        sum += transaction.value;
    }
    return sum / user.transactions.length;
}

function getHigherTransactionByType(typeTransacation) {
    const array = [];
    for (let transaction of user.transactions) {
        if (transaction.type == typeTransacation) {
            array.push(transaction.value);
        }
    }
    return Math.max(...array);
}

function getTransactionsCount() {
    let count =
    {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions) {
        if (transaction.type == "credit") {
            count.credit++
        } else {
            count.debit++
        }
    }
    return count

}

const user = {
    nome: 'mariana',
    transactions: [],
    balance: 0
}

var operation = user.balance;

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });


console.log(user.transactions);
console.log('saldo: ' + operation);
console.log('media: ' + getAverageTransactionValue());
console.log('max: ' + getHigherTransactionByType('credit'));
console.log('numero de transaçoes: ' + getTransactionsCount());
