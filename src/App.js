import React, { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 29.57,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Books",
    amount: 24.87,
    date: new Date(2021, 4, 18),
  },
  {
    id: "e3",
    title: "Pet Food",
    amount: 35.6,
    date: new Date(2021, 1, 5),
  },
  {
    id: "e4",
    title: "Maccas",
    amount: 72.57,
    date: new Date(2021, 7, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
