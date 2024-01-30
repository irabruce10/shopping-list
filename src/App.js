import "./index.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <List data={initialFriends} />

        {isOpen && <Form />}

        <Button onClick={handleToggle}>
          {isOpen ? "Close" : "Add Product"}
        </Button>
      </div>
      {/* <Header /> */}
    </div>
  );
}

function Header() {
  return <h1>My shopping list.....</h1>;
}

function List({ data }) {
  return (
    <div>
      <ul>
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

function Product({ product }) {
  return (
    <div>
      <li>
        <img src={product.image} alt={product.image} />
        <h3>{product.name}</h3>
        <p>{product.balance}</p>
        <Button>Select</Button>
      </li>
    </div>
  );
}

function Form() {
  return (
    <form className="form-add-friend">
      <label> Name</label>
      <input />

      <label>image</label>
      <input />
      <Button>Add</Button>
    </form>
  );
}

function ProductDetail() {}

function Cart() {}
