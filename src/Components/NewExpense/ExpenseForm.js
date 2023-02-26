import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [userInputs, setUserInputs] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInputs({
    //     ...userInputs,
    //     title: event.target.value
    // });
    //
    //whenever your state update depends on the previous state, use this function form:
    // setUserInputs((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   amount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   date: event.target.value,
    // });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const result = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    setTitle("");
    setAmount("");
    setDate("");
    onSaveExpenseData(result);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="Text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            value={amount}
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
