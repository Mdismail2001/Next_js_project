import React from "react";

// Function to fetch a single post
async function getSinglePost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const post = await getSinglePost(params.id);
  return {
    title: `Post #${params.id} Page`,
    description: post.body.slice(0, 100) + "...",
  };
}

// Page component
export default async function Page({ params }) {
  const post = await getSinglePost(params.id);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-3 text-center">
        Post #{params.id}
      </h1>
      <p className="text-center text-gray-700">{post.body}</p>
    </div>
  );
}
