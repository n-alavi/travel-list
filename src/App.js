import { useState } from "react";
import "./index.css";
const initialItems = [
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
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 Far Away 👜</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);
  function HandleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="items-list">
      <ul className="list">
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <div>
      <footer className="stats">
        <em>🎒 You have x items on your list.and you already packed x (x%) </em>
      </footer>
    </div>
  );
}
