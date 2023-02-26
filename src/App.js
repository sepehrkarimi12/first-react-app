import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 12, 12),
  },
  {
    id: "e2",
    title: "Car Insurance2",
    amount: 294.68,
    date: new Date(2021, 12, 13),
  },
  {
    id: "e3",
    title: "Car Insurance3",
    amount: 294.69,
    date: new Date(2022, 12, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
