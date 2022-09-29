import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2022");

  const filterYearHandler = (year) => {
    setYearFilter(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterYearChange={filterYearHandler}
          selected={yearFilter}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
