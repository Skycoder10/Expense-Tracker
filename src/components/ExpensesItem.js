import React from 'react';
import Card from './Card';
import ExpenseDate  from './ExpenseDate';
import './ExpenseItem.css';
import './buttonclick.css';


const ExpensesItem = (props) => {
    

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button type='button' className="button-1">Delete</button>
            
        </Card>
    );
}
export default ExpensesItem;