import React, { useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaDownload,
  FaPlus,
  FaCreditCard,
} from "react-icons/fa";

const initialPayments = [
  {
    id: 1,
    date: "2024-10-01",
    description: "Pro Subscription",
    amount: "$29.99",
    status: "Completed",
    method: "Visa",
    card: "**** **** **** 1234",
  },
  {
    id: 2,
    date: "2024-09-01",
    description: "Monthly Renewal",
    amount: "$29.99",
    status: "Pending",
    method: "PayPal",
    card: "PayPal",
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Failed":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getPaymentIcon = (method) => {
  switch (method) {
    case "Visa":
      return <FaCcVisa className="text-blue-600 text-xl" />;
    case "Mastercard":
      return <FaCcMastercard className="text-red-500 text-xl" />;
    case "PayPal":
      return <FaPaypal className="text-blue-400 text-xl" />;
    default:
      return <FaCreditCard className="text-gray-500 text-xl" />;
  }
};

const ProfilePaymentsInformation = () => {
  const [payments] = useState(initialPayments);
  const [methods, setMethods] = useState([
    {
      id: 1,
      method: "Visa",
      cardNumber: "**** **** **** 1234",
      expiry: "12/25",
      default: true,
    },
  ]);

  const [newMethod, setNewMethod] = useState({
    method: "Visa",
    cardNumber: "",
    expiry: "",
    cvv: "",
    default: false,
  });

  const handleMethodChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMethod((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddMethod = (e) => {
    e.preventDefault();
    const newId = methods.length + 1;
    const formatted = {
      ...newMethod,
      id: newId,
      cardNumber: `**** **** **** ${newMethod.cardNumber.slice(-4)}`,
    };

    if (newMethod.default) {
      setMethods((prev) =>
        [formatted, ...prev.map((m) => ({ ...m, default: false }))]
      );
    } else {
      setMethods((prev) => [...prev, formatted]);
    }

    setNewMethod({
      method: "Visa",
      cardNumber: "",
      expiry: "",
      cvv: "",
      default: false,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 space-y-8">
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Payment Information
        </h2>
        <p className="text-gray-500">Manage your cards and view past payments.</p>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Method</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{p.date}</td>
                  <td className="px-4 py-3">{p.description}</td>
                  <td className="px-4 py-3">{p.amount}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    {getPaymentIcon(p.method)}
                    {p.card}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusBadge(p.status)}`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaDownload />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Saved Methods */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Saved Payment Methods
        </h3>
        <ul className="space-y-3">
          {methods.map((m) => (
            <li
              key={m.id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-md border"
            >
              <div className="flex items-center gap-4">
                {getPaymentIcon(m.method)}
                <div>
                  <p className="font-semibold text-gray-800">
                    {m.method} {m.cardNumber}
                  </p>
                  <p className="text-sm text-gray-500">Expires: {m.expiry}</p>
                </div>
              </div>
              {m.default && (
                <span className="text-xs text-green-600 font-medium">
                  Default
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Method */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <FaPlus /> Add New Payment Method
        </h3>
        <form
          onSubmit={handleAddMethod}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Method</label>
            <select
              name="method"
              value={newMethod.method}
              onChange={handleMethodChange}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={newMethod.cardNumber}
              onChange={handleMethodChange}
              required
              placeholder="1234 5678 9012 3456"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Expiry</label>
            <input
              type="text"
              name="expiry"
              value={newMethod.expiry}
              onChange={handleMethodChange}
              placeholder="MM/YY"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CVV</label>
            <input
              type="password"
              name="cvv"
              value={newMethod.cvv}
              onChange={handleMethodChange}
              placeholder="123"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>
          <div className="md:col-span-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="default"
              checked={newMethod.default}
              onChange={handleMethodChange}
            />
            <label className="text-sm">Set as default payment method</label>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 transition"
            >
              Save Method
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePaymentsInformation;
