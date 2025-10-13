import React from "react";

const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

const Page = async ({ params }) => {
  const { id } = params;

  const post = await getSinglePost(id);
    // console.log(post);

  return (
    <div>
      <h1 className="text-xl font-bold mb-2 text-center">Post #{id}</h1>
      <p className="text-center">{post.body}</p>
    </div>
  );
};

export default Page;
