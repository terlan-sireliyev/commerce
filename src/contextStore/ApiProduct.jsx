import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Kontekst yaradılır
export const ApiContext = createContext();

export default function ApiProductContext({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("API xətası:", error);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ products }}>
      {children}
    </ApiContext.Provider>
  );
}
