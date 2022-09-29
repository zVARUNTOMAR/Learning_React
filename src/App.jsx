import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpenseFilter from "./components/Expenses/ExpensesFilter";

// import { useState } from "react";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // const addExpenseData = (expense) => {
  //   let updatedExpenses = [...expenses, expense];
  //   console.log("updated:", updatedExpenses);
  //   setExpenses(updatedExpenses);
  //   // expenses.push(expense);
  //   console.log(expenses);
  // };

  return (
    <Card className="App">
      <h5 className="title">Let's get started</h5>
      <NewExpense />
      <Expenses expenses={expenses} />
    </Card>
  );
}

export default App;
