import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "책 제목 1", price: 15000, quantity: 2 },
    { id: 2, title: "책 제목 2", price: 22000, quantity: 1 },
  ]);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto mt-12">
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-bold">장바구니</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b border-gray-200">상품명</th>
                <th className="py-3 px-4 border-b border-gray-200">가격</th>
                <th className="py-3 px-4 border-b border-gray-200">수량</th>
                <th className="py-3 px-4 border-b border-gray-200">합계</th>
                <th className="py-3 px-4 border-b border-gray-200"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="py-4 px-4 border-b border-gray-200">{item.title}</td>
                  <td className="py-4 px-4 border-b border-gray-200">{item.price} 원</td>
                  <td className="py-4 px-4 border-b border-gray-200">{item.quantity}</td>
                  <td className="py-4 px-4 border-b border-gray-200">
                    {item.price * item.quantity} 원
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-end items-center">
          <div className="text-xl font-bold mr-4">총 가격: {calculateTotalPrice()} 원</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
