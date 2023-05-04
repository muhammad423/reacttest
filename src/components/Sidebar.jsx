import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constants";
import "./sideBar.css";


const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
        position: 'fixed'
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            className="category-icon"
            style={{
              color: category.name === selectedCategory ? "white" : "grey",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
