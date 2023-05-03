import ExpanseFilter from "./Expanse-Tracker/ExpanseFilter";
import ExpanseForm from "./Expanse-Tracker/ExpanseForm";
import ExpanseList from "./Expanse-Tracker/ExpanseList";
import { useState } from "react";
import Categories from "./Expanse-Tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Football", amount: 10, category: "Entertainment" },
    // { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    // { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    // { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpanseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpanseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpanseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
      {Categories }
    </div>
  );
}

export default App;
