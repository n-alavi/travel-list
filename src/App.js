import { useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Item from "./Item";
const items = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "T-shirt", quantity: 5, packed: false },
  { id: 5, description: "pants", quantity: 1, packed: false },
  { id: 6, description: "Hat", quantity: 2, packed: false },
  { id: 7, description: "Bag", quantity: 2, packed: false },
  { id: 8, description: "Glasses", quantity: 1, packed: false },
  { id: 9, description: "mobile", quantity: 1, packed: false },
];
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
