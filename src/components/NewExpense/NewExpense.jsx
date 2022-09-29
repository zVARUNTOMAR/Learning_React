import "./NewExpense.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseData = (expense) => {
    const expenseData = {
      id: "e" + Math.floor(Math.random() * (100 - 6) + 6),
      ...expense,
    };
    props.onAddExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
