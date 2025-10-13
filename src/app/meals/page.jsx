import MealSearch from "./components/MealSearch";

async function getMeals(search) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    { cache: "no-store" } // disables Next.js caching for live data
  );
  const data = await res.json();
  return data.meals;
}

export default async function Page({ searchParams }) {
  const search = searchParams.search || "a";
  const meals = await getMeals(search);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Meals Finder</h1>
      <MealSearch />

      {!meals ? (
        <p className="text-gray-500 mt-10">No meals found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
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
      )}
    </div>
  );
}
