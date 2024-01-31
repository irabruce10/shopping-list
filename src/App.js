import "./index.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 11327843,
    name: "Bruce",
    image: "https://i.pravatar.cc/48?u=11327843",
    balance: 0,
    pin: 1111,
  },
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
    pin: 2222,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
    pin: 3333,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    pin: 4444,
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
  const [product, setProduct] = useState(initialFriends);
  const [select, setSelect] = useState(null);

  function handleSelect(product) {
    setSelect(product);
    console.log(select);
  }

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleNewProduct(product) {
    setProduct((products) => [...products, product]);
    setIsOpen(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <List product={product} onSelect={handleSelect} select={select} />

        {isOpen && <Form onNewProduct={handleNewProduct} />}

        <Button onClick={handleToggle}>
          {isOpen ? "Close" : "Add Product"}
        </Button>
      </div>
      {/* <Header /> */}

      {select && <ProductDetail select={select} />}
    </div>
  );
}

function Login() {
  return <h1>Login</h1>;
}

function Header() {
  return <h1>My shopping list.....</h1>;
}

function List({ product, onSelect, select }) {
  return (
    <ul>
      {product.map((product) => (
        <Product
          key={product.id}
          product={product}
          onSelect={onSelect}
          select={select}
        />
      ))}
    </ul>
  );
}

function Product({ product, onSelect, select }) {
  let isSel = product.id === select.id;
  return (
    <div>
      <li className={isSel ? "selected" : ""}>
        <img src={product.image} alt={product.image} />
        <h3>{product.name}</h3>
        <p>{product.balance}</p>
        <Button onClick={() => onSelect(product)}>
          {isSel ? "Close" : "Select"}
        </Button>
      </li>
    </div>
  );
}

function Form({ onNewProduct }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    let id = crypto.randomUUID();
    const newProduct = { name, image: `${image}?=${id}`, id: { id } };
    onNewProduct(newProduct);

    setImage("https://i.pravatar.cc/48");
    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>image</label>
      <input value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}

function ProductDetail({ select }) {
  return (
    <div className="form-split-bill">
      <h2>my name is {select.name} </h2>
      <img src={select.image} alt={select.image} />
      <p>{select.balance}</p>
    </div>
  );
}

function Cart() {}
