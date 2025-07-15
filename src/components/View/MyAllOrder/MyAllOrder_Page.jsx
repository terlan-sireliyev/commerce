import React, { useState, useEffect } from "react";

const MyAllOrder_Page = () => {
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data representing delivered orders
    const mockDeliveredOrders = [
      {
        id: 1,
        productName: "Wireless Earbuds",
        productPrice: "$60.00",
        productImage: "https://via.placeholder.com/80",
        orderDate: "2024-11-08",
        deliveryDate: "2024-11-12",
      },
      {
        id: 2,
        productName: "Smartphone Case",
        productPrice: "$25.00",
        productImage: "https://via.placeholder.com/80",
        orderDate: "2024-10-09",
        deliveryDate: "2024-10-14",
      },
      {
        id: 3,
        productName: "Laptop Stand",
        productPrice: "$40.00",
        productImage: "https://via.placeholder.com/80",
        orderDate: "2024-10-10",
        deliveryDate: "2024-10-15",
      },
    ];

    // Simulate data loading delay
    setTimeout(() => {
      setDeliveredOrders(mockDeliveredOrders);
      setLoading(false);
    }, 1000);
  }, []);
     const WidthMyAllOrderPage =
  "mx-auto w-full max-w-[1200px] px-2 sm:px-6 md:px-8"; // ekran ölçüsünə uyğun paddings və max-width

    return (
    <div
      className={`${WidthMyAllOrderPage} = mx-auto mt-[90px] w-full rounded-lg bg-gray-100 p-6 shadow-lg `}
    >
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        All My Orders
      </h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <ul className="space-y-6">
          {deliveredOrders.map((order) => (
            <li
              key={order.id}
              className="rounded-lg bg-white p-5 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={order.productImage}
                  alt={order.productName}
                  className="h-20 w-20 rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {order.productName}
                  </h3>
                  <p className="text-gray-600">Price: {order.productPrice}</p>
                  <div className="mt-2 flex space-x-8 text-sm text-gray-500">
                    <span>Order Date: {order.orderDate}</span>
                    <span>Delivery Date: {order.deliveryDate}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyAllOrder_Page;
