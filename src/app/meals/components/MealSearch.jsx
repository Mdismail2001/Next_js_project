"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealSearch = () => {
  const [search, setSearch] = useState("a"); // default search
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams({ search });
    router.push(`${pathname}?${params.toString()}`);
  }, [search]);

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search meals..."
        className="border border-gray-400 rounded-lg px-3 py-2 w-64 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default MealSearch;
