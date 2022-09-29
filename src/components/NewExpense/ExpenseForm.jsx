import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // const clickHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     title: event.target.value,
  //   });
  // };

  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: +enteredAmount,
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setDate("");
    setAmount("");
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  if (showForm) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              // onChange={titleChangeHandler}
              required
              onChange={titleHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              min="0.01"
              step="0.01"
              required
              value={enteredAmount}
              onChange={amountHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              placeholder="Enter Date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              required
              onChange={dateHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={toggleForm}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    return (
      <div className="new-expense__actions__noform">
        <button type="button" onClick={toggleForm}>
          Add new Expense
        </button>
      </div>
    );
  }
};

export default ExpenseForm;
