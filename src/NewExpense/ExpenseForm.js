import React,{ useState }from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [enteredTitel,setEnteredTitel] = useState('');
    const titleChangeHandler = (event) =>{
        setEnteredTitel(event.target.value);
    };

    const [enteredAmount,setEnteredAmount] = useState('');
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };

    const [enteredDate,setEnteredDate] = useState('');
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        const ExpenseData = {
            title: enteredTitel,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        //console.log(12);
        props.onGetDataOfMine(ExpenseData);
        setEnteredTitel('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    

    return(
        <form >
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'value={enteredTitel} onChange={titleChangeHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'value={enteredAmount} onChange={amountChangeHandler}></input> 
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'value={enteredDate} onChange={dateChangeHandler}></input>    
                </div>

            </div>
            <div className="new-expense__actions">
                
                <button type='button' onClick={props.onCancel}>cancel</button>
                <button type='submit' onClick={submitHandler}>Add Expense</button>
                

            </div>
        </form>
    );


}

export default ExpenseForm;