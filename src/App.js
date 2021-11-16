import React,{useState} from 'react';
import './App.css';
import Card from './components/Card';
import './components/Expense.css';
import NewExpense from './NewExpense/NewExpense';
import ExpensesOf from './components/ExpensesOf';



const initialExpenses = [
  
];


function App() {

  const [expenses,setExpenses]=useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpense=>{
      return [expense,...prevExpense];
    });
    
  };
  console.log(expenses);
  
  return(
    
    <Card className="expenses">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <ExpensesOf items={expenses}/>
    </Card>
    
  );
}

export default App;
