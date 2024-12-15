function getTransactionData(value) {
    return new Promise((resolve) => {
        resolve(transactionData);
    });
}

module.exports = {
    getTransactionData
};




const transactionData=
      [
          {
            custid: 1,
            name: "John",
            transactionAmount: 120, 
            transactionDate: "05-01-2019"
          },
          {
            custid: 1,
            name: "John",
            transactionAmount: 75,
            transactionDate: "05-21-2019"
          },
          {
            custid: 1,
            name: "John",
            transactionAmount: 94,
            transactionDate: "05-21-2019"
          },
          {
            custid: 1,
            name: "John",
            transactionAmount: 10,
            transactionDate: "06-01-2019"
          },
          {
            custid: 1,
            name: "John",
            transactionAmount: 75,
            transactionDate: "06-21-2019"
          },
          {
            custid: 1,
            name: "John",
            transactionAmount: 200,
            transactionDate: "07-01-2019"
          },
          {
            custid: 1,
            name: "John",
            transactionAmount: 1,
            transactionDate: "07-04-2019"
          },
          {
            custid: 1,
            name: "John",
            transactionAmount: 80,
            transactionDate: "07-03-2019"
          },
          {
            custid: 1,
            name: "John",
            transactionAmount: 224,
            transactionDate: "07-21-2019"
          },
          {
            custid: 2,
            name: "Danny",
            transactionAmount: 125,
            transactionDate: "05-01-2019"
          },
          {
            custid: 2,
            name: "Danny",
            transactionAmount: 75,
            transactionDate: "05-21-2019"
          },
          {
            custid: 2,
            name: "Danny",
            transactionAmount: 10,
            transactionDate: "06-01-2019"
          },
          {
            custid: 2,
            name: "Danny",
            transactionAmount: 75,
            transactionDate: "06-21-2019"
          },
          {
            custid: 2,
            name: "Danny",
            transactionAmount: 200,
            transactionDate: "07-01-2019"
          },
          {
            custid: 2,
            name: "Danny",
            transactionAmount: 224,
            transactionDate: "07-21-2019"
          },
          {
            custid: 3,
            name: "Sallys",
            transactionAmount: 120,
            transactionDate: "06-21-2019"
          }
      ];