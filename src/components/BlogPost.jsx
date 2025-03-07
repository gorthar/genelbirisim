import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/blog-posts/${slug}.md`);
        if (!response.ok) {
          throw new Error("Post not found");
        }
        const text = await response.text();
        setPost(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
        {/* Background Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply blur-2xl animate-float opacity-80" />
          <div className="absolute -right-20 top-40 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply blur-2xl animate-float-delayed opacity-80" />
          <div className="absolute left-1/3 top-96 w-56 h-56 bg-yellow-200 rounded-full mix-blend-multiply blur-2xl animate-float-slow opacity-80" />
          <div className="absolute right-1/3 bottom-32 w-60 h-60 bg-emerald-200 rounded-full mix-blend-multiply blur-2xl animate-float-delayed opacity-80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 pt-16 md:pt-24 pb-16 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-8"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
        {/* Background Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply blur-2xl animate-float opacity-80" />
          <div className="absolute -right-20 top-40 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply blur-2xl animate-float-delayed opacity-80" />
          <div className="absolute left-1/3 top-96 w-56 h-56 bg-yellow-200 rounded-full mix-blend-multiply blur-2xl animate-float-slow opacity-80" />
          <div className="absolute right-1/3 bottom-32 w-60 h-60 bg-emerald-200 rounded-full mix-blend-multiply blur-2xl animate-float-delayed opacity-80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 pt-16 md:pt-24 pb-16 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-8"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-xl text-red-600">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply blur-2xl animate-float opacity-80" />
        <div className="absolute -right-20 top-40 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply blur-2xl animate-float-delayed opacity-80" />
        <div className="absolute left-1/3 top-96 w-56 h-56 bg-yellow-200 rounded-full mix-blend-multiply blur-2xl animate-float-slow opacity-80" />
        <div className="absolute right-1/3 bottom-32 w-60 h-60 bg-emerald-200 rounded-full mix-blend-multiply blur-2xl animate-float-delayed opacity-80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-16 md:pt-24 pb-16 relative z-10">
        <Link
          to="/blog"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-8"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
        <article className="bg-white rounded-xl shadow-md p-4 md:p-8 lg:p-12">
          <div className="prose prose-sm md:prose-base lg:prose-lg prose-green max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
              components={{
                h1: ({ ...props }) => (
                  <h1 className="text-4xl font-bold mb-4" {...props} />
                ),
                h2: ({ ...props }) => (
                  <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />
                ),
                h3: ({ ...props }) => (
                  <h3 className="text-2xl font-bold mt-6 mb-3" {...props} />
                ),
                p: ({ ...props }) => <p className="mb-4" {...props} />,
                ul: ({ ...props }) => (
                  <ul className="list-disc pl-6 mb-4" {...props} />
                ),
                ol: ({ ...props }) => (
                  <ol className="list-decimal pl-6 mb-4" {...props} />
                ),
                li: ({ ...props }) => <li className="mb-1" {...props} />,
                blockquote: ({ ...props }) => (
                  <blockquote
                    className="border-l-4 border-green-500 pl-4 italic my-4"
                    {...props}
                  />
                ),
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <div className="relative my-8">
                      <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <code
                          className={`${className} text-sm text-gray-200`}
                          {...props}
                        >
                          {children}
                        </code>
                      </pre>
                    </div>
                  ) : (
                    <code
                      className="bg-gray-100 rounded px-1 py-0.5 text-green-600"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
