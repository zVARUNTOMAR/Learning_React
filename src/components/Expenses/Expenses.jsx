import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2021");

  const filterYearHandler = (year) => {
    setYearFilter(year);
  };

  const filterYearExpenses = props.expenses.filter((ex) => {
    return ex.date.getFullYear().toString() === yearFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterYearChange={filterYearHandler}
          selected={yearFilter}
        />
        <ExpensesChart expenses={filterYearExpenses} />
        <ExpensesList filterYearExpenses={filterYearExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
