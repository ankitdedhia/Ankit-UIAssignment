import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getTransactionData } from './api/points.js';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function calculatePoints(data){
  const pointsPerTransaction = data.map(transaction => {
    let points = 0;
    const over100 = transaction.transactionAmount - 100;
    //const over50 = transaction.transactionAmount - 50;
    if(over100 > 0){
      points += over100 * 2;
    }
    if(transaction.transactionAmount > 50){
      points += 50;
    }
    const month = new Date(transaction.transactionDate).getMonth();
    return {...transaction, points, month};
  });
  let singleCustomer = {}
  let totalPointsByCustomer = {};
  pointsPerTransaction.forEach((data)=>{
    const {custid, name, points, month} = data;
    if(!singleCustomer[custid]){
      singleCustomer[custid] = [];
    }
    if(!totalPointsByCustomer[custid]){
      totalPointsByCustomer[custid] = { points: 0, name: name };
    }

    totalPointsByCustomer[custid].points += points;
    
    if(singleCustomer[custid][month]){
      singleCustomer[custid][month].points += points;
      singleCustomer[custid][month].month = months[month];
      singleCustomer[custid][month].name = name;
      singleCustomer[custid][month].numOfTransactions += 1;
    }
    else{
      singleCustomer[custid][month] = {
        custid,
        name,
        month: months[month],
        points,
        numOfTransactions: 1
      }
    }

  });
  let tot = [];
  for (var custKey in singleCustomer) {    
    singleCustomer[custKey].forEach(cRow=> {
      tot.push(cRow);
    });    
  }
  let totByCustomer = [];
  console.log(totalPointsByCustomer);
  for (custKey in totalPointsByCustomer) {    
    totByCustomer.push({
      name: totalPointsByCustomer[custKey].name,
      points: totalPointsByCustomer[custKey].points
    });    
  }

  return {
    summaryByCustomer: tot,
    pointsPerTransaction,
    totalPointsByCustomer:totByCustomer
  };
  


}
function App() {
  const [transactionData, setTransactionData] = useState(null);
 
  useEffect(() => {
    getTransactionData().then((data)=> {          
      const results = calculatePoints(data);
      console.log(results);
      setTransactionData(results);
    });
  }, []);
  if (transactionData == null) {
    return <div>Loading...</div>;   
  }

  return (transactionData == null ?
  <div>Loading...</div> 
    :          
   <>
  
  

    
          
    <h3>Customer Points by month </h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Month</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {transactionData.summaryByCustomer.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.month}</td>
            <td>{row.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h3>Total Customer Points</h3>
    <table>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Total Points</th>
        </tr>
      </thead>
      <tbody>
        {transactionData.totalPointsByCustomer.map((item,i) => (
          <tr key={i}>
            <td>{item.name}</td>            
            <td>{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>

   
   </>
  );
}

export default App;
