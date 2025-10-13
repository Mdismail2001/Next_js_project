
import Link from 'next/link';
import React from 'react';

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const Page = async () => {
  const posts = await getPosts();
//   console.log(posts);

  return (
    <div className='grid grid-cols-4 gap-5'>
      {posts.map(post => (
        <div key={post.id} className='p-5 border border-gray-300 rounded-md'>
        <h1 className='text-2xl text-amber-100'>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/posts/${post.id}`} className='text-blue-500 underline'>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
