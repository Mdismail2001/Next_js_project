"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [meals, setMeals] = useState(null);
  const [search, setSearch] = useState("a"); // default search

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await res.json();
      setMeals(data.meals);
    };
    fetchMeals();
  }, [search]); // 🔁 refetch whenever search changes

  if (!meals) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Meals Finder</h1>

      {/* ✅ Search Input */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search meals..."
        className="border border-gray-400 rounded-lg px-3 py-2 mb-6 w-64 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* ✅ Meals Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-48 h-48 object-cover rounded-md mx-auto mb-3"
            />
            <p className="font-semibold text-lg">{meal.strMeal}</p>
            <p className="text-sm text-gray-600">Meal ID: {meal.idMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
