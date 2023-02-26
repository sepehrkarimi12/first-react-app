import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = ({ date, title, price }) => {
  const [titleValue, setTitleValue] = useState(title);

  const clickHandler = () => {
    setTitleValue(titleValue + "1");
    // console.log(title); //not change
    // console.log(titleValue); //change
  };

  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={date} />
        </div>
        <div className="expense-item__description">
          <h2>{titleValue}</h2>
          <div className="expense-item__price">${price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
