import React from "react";

const CategorySelection = ({ categories, onSelect }) => {
  return (
    <div className="bg-red p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Select a Category</h2>
      <div className="space-y-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat)}
            className="w-full text-left p-3 bg-red-300 rounded hover:bg-red-600"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;