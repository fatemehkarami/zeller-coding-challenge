import React, { useState } from "react";
import "./UserTypeSelector.css";

interface UserTypeSelectorProps {
  onUserTypeChange: (userType: string) => void;
}

function UserTypeSelector({ onUserTypeChange }: UserTypeSelectorProps) {
  const [selectedUserType, setSelectedUserType] = useState("Admin");

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUserType = event.target.value;
    setSelectedUserType(newUserType);
    onUserTypeChange(newUserType);
  };

  return (
    <div className="user-type-selector">
      <h2>User Types</h2>
      <label className={selectedUserType === "Admin" ? "selected" : ""}>
        <input
          type="radio"
          value="Admin"
          checked={selectedUserType === "Admin"}
          onChange={handleUserTypeChange}
        />
        Admin
      </label>
      <label className={selectedUserType === "Manager" ? "selected" : ""}>
        <input
          type="radio"
          value="Manager"
          checked={selectedUserType === "Manager"}
          onChange={handleUserTypeChange}
        />
        Manager
      </label>
      <hr />
    </div>
  );
}

export default UserTypeSelector;
