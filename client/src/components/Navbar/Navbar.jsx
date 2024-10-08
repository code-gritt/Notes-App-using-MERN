import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchQuery, SetSearchQuery] = useState("");
  const navigate = useNavigate();

  const OnLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    SetSearchQuery("");
  };
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <Link to="/dashboard">
          <h2 className="text-xl font-medium text-black py-2">Notes</h2>
        </Link>

        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            SetSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <ProfileInfo OnLogout={OnLogout} />
      </div>
    </>
  );
};

export default Navbar;
