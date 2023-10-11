import React, { useState } from "react";
import UserTypeSelector from "./components/UserTypeSelector";
import CustomerList from "./components/CustomerList";

const App: React.FC = () => {
  const [userType, setUserType] = useState("Admin");

  const handleUserTypeChange = (newUserType: string) => {
    setUserType(newUserType);
  };

  return (
    <div className="App">
      <header className="App-header">
        <UserTypeSelector onUserTypeChange={handleUserTypeChange} />
        <CustomerList userType={userType} />
      </header>
    </div>
  );
};

export default App;
