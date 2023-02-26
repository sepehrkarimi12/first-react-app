import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart filteredExpenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* {filteredExpenses.length === 0 ? (
        <p>Nothing to show</p>
      ) : (
        filteredExpenses.map((item, index) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            price={item.amount}
          />
        ))
      )} */}
    </Card>
  );
};

export default Expenses;
