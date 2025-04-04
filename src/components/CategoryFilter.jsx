import React from 'react';

// Componente de filtro por categoría
const CategoryFilter = ({ categories, activeCategory, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onChange(category.value)}
          className={`flex items-center px-3 py-2 rounded-full text-sm ${
            activeCategory === category.value
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {category.icon}
          <span className="ml-1">{category.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;