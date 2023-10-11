import React from "react";
import { useQuery } from "@apollo/client";
import { ListZellerCustomers } from "../graphql/queries";
import "./CustomerList.css";

interface Customer {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface CustomerListProps {
  userType: string;
}

const CustomerList: React.FC<CustomerListProps> = ({ userType }) => {
  const { loading, error, data } = useQuery(ListZellerCustomers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const customers: Customer[] = data.listZellerCustomers.items;

  // Filter customers based on the selected user type
  const filteredCustomers = customers.filter((customer) =>
    userType === "Admin"
      ? customer.role === "ADMIN"
      : userType === "Manager"
      ? customer.role === "MANAGER"
      : true
  );

  return (
    <div className="customer-list">
      <h2>List of Customers</h2>
      <ul>
        {filteredCustomers.map((customer) => (
          <li key={customer.id}>
            <div className="blue-box">{customer.name.charAt(0)}</div>
            {customer.name} ({customer.role})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
