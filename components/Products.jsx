"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const divClasses = [
    "div1",
    "div2",
    "div3",
    "div4",
    "div5",
    "div6",
    "div7",
    "div8",
    "div9",
    "div10",
    "div11",
    "div12",
    "div13",
    "div14",
  ];

  return (
    <div className="mt-4 p-10">
      <div className="flex justify-center mb-20 font-bold text-4xl">
        <h1>THE FIGMA STORE</h1>
      </div>

      <div className="parent">
        {divClasses.map((divClass, index) => (
          <div key={index} className={divClass}>
            {products[index] && (
              <Link href={`/product/${products[index]._id}`}>
                <div className="cursor-pointer">
                  <img
                    src={products[index].images[0]}
                    alt={products[index].name}
                    className="transform transition duration-700 hover:-translate-y-2 hover:border-2 hover:border-black rounded-[30px] w-full h-[300px] object-cover"
                  />
                  <p className="text-lg font-semibold text-center mt-2">
                    {products[index].name}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    ₹{products[index].price}
                  </p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
