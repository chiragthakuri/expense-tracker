import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value)
    }
    
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) =>{
            e.preventDefault();

            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }

            props.onSaveExpenseData(expenseData)
            setEnteredTitle('')
            setEnteredAmount('')
            setEnteredDate('')
    }

    
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls"> 
            <div className="new-expense__control">
                <label>title</label>
                <input type="text" value={enteredTitle} onChange = {titleChangeHandler} />
                <p>{enteredTitle}</p>
            </div>    

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" 
                onChange = {amountChangeHandler}
                value={enteredAmount}
                />
                <p>{enteredAmount}</p>
            </div>     

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2023-12-01" 
                onChange = {dateChangeHandler}
                value={enteredDate}
                />
                {enteredDate &&<p>{enteredDate}</p>}
            </div>     
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}
