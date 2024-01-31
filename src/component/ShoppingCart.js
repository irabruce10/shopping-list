import React from "react";
import "../component/index.css";

const products = [
  {
    id: 1,
    name: "Vivamus vitae",
    rating: 4.3,
    description:
      "Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
    price: 199,
    image: require("../images/product-1.png"),
  },
  {
    id: 2,
    name: "Fusce sit amet ipsum",
    rating: 4.2,
    description:
      "Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
    price: 229,
    image: require("../images/product-2.png"),
  },
  {
    id: 3,
    name: "Etiam volutpat aliquam",
    rating: 3.2,
    description:
      "Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
    price: 99,
    image: require("../images/product-3.png"),
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    rating: 4.8,
    description:
      "Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
    price: 119,
    image: require("../images/product-4.png"),
  },
  {
    id: 5,
    name: "Ultrices nisl",
    rating: 4.5,
    description:
      "Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
    price: 85,
    image: require("../images/product-5.jpg"),
  },
  {
    id: 6,
    name: "Curabitur in elementum tortor",
    rating: 3.8,
    description:
      " Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed",
    price: 149,
    image: require("../images/product-1.png"),
  },
];

export default function ShoppingCart() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

function ProductList() {
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

function Product({ product }) {
  return (
    <li className="product">
      <img className="product-image" src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </li>
  );
}
