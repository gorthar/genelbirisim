import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const postsData = [
      {
        slug: "hello-world",
        title: "Hello World",
        date: "2024-12-31",
        description: "My first blog post",
      },

      // Add more posts here as you create them
    ];

    setPosts(postsData);
  }, []);

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply blur-2xl animate-float opacity-80" />
        <div className="absolute -right-20 top-40 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply blur-2xl animate-float-delayed opacity-80" />
        <div className="absolute left-1/3 top-96 w-56 h-56 bg-yellow-200 rounded-full mix-blend-multiply blur-2xl animate-float-slow opacity-80" />
        <div className="absolute right-1/3 bottom-32 w-60 h-60 bg-emerald-200 rounded-full mix-blend-multiply blur-2xl animate-float-delayed opacity-80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-16 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, ideas, and updates about web development and technology
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Loading posts...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-4 md:p-8">
                  <div className="text-sm text-green-600 mb-4 font-medium">
                    {post.date}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-200">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
