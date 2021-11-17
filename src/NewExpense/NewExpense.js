import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const getFromExpenseForm = (event) =>{
        const ExpenseData={
            ...event,
            id: Math.random().toString()
        };
        props.onAddExpense(ExpenseData);
        
    };
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };
    return(
        <div className="new-expense">
            {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
        onGetDataOfMine={getFromExpenseForm}
          onCancel={stopEditingHandler}
        />
      )}
          
        </div>
    );

}

export default NewExpense;