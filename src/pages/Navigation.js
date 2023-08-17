import React, { useState } from "react";
import Expenses from "../component/Expenses/Expenses";
import NewExpense from "../component/NewExpense/NewExpense";
import Header from "../component/UI/Header";
function Navigation() {
  const DommyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DommyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
  <Header></Header>
  <div style={{ marginTop: '70px' }}>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
  </div>
</div>

  );
}

export default Navigation;
