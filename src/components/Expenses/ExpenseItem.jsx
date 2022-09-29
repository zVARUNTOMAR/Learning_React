import ExpenseDate from "./ExpenseDate";
// import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // // const [date, setDate] = useState(props.date);

  // const clickHandler = () => {
  //   setTitle("Updated by Click button");
  //   // setDate(new Date(2050, 12, 31));
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
