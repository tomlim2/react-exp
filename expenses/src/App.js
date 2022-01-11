import NewExpense from "./components/Expense/NewExpense";

function App() {
  const addExpenseHandler = (expense) =>{
    console.log('In App.js')
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
    </div>
  );
}

export default App;
