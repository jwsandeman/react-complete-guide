import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  // can be conditionaly rendered like this or as below
  // if (isEditing === false) {
  //   return (
  //     <div className="new-expense">
  //       <button onClick={startEditingHandler}>Add New Expense</button>
  //     </div>
  //   );
  // }

  // if (isEditing === true) {
  //   return (
  //     <div className="new-expense">
  //       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  //     </div>
  //   );
  // }

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
