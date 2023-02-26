import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
