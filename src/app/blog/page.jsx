
"use client";

import { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "10 Creative Ideas to Make Your Wedding Unforgettable",
    description:
      "Discover creative wedding planning ideas, beautiful decorations, and unique experiences for your special day.",
    category: "Wedding",
    author: "Sarah Johnson",
    date: "Nov 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
  },
  {
    id: 2,
    title: "How to Plan a Successful Corporate Event",
    description:
      "Learn the essential steps to organize a professional corporate event that your guests will remember.",
    category: "Corporate",
    author: "Michael Smith",
    date: "Nov 18, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Birthday Party Planning",
    description:
      "From choosing a theme to selecting decorations, here is everything you need for an amazing birthday.",
    category: "Birthday",
    author: "Emma Wilson",
    date: "Nov 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900",
  },
  {
    id: 4,
    title: "Top Event Decoration Trends You Should Know",
    description:
      "Explore the latest decoration trends that can transform any event into a beautiful experience.",
    category: "Decoration",
    author: "David Miller",
    date: "Nov 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=900",
  },
  {
    id: 5,
    title: "How Technology Is Changing Event Management",
    description:
      "Discover how digital tools and modern technology are making event planning easier and smarter.",
    category: "Technology",
    author: "Alex Brown",
    date: "Nov 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
  },
  {
    id: 6,
    title: "Tips for Organizing an Amazing Music Festival",
    description:
      "A practical guide to managing entertainment, audiences, venues, and festival experiences.",
    category: "Entertainment",
    author: "Sophia Lee",
    date: "Nov 08, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900",
  },
];

const categories = [
  "All",
  "Wedding",
  "Corporate",
  "Birthday",
  "Decoration",
  "Technology",
  "Entertainment",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" ||
      blog.category === activeCategory;

    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#101828] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="text-orange-400 font-semibold tracking-widest uppercase text-sm">
            Our Blog & Insights
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Inspiration for Your
            <span className="text-orange-400"> Next Big Event</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
            Explore event planning tips, creative ideas, and expert
            insights to make every occasion unforgettable.
          </p>

          <div className="max-w-xl mx-auto mt-10">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full px-6 py-4 text-gray-900 outline-none focus:ring-4 focus:ring-orange-400/30"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-orange-500 font-semibold uppercase text-sm">
            Explore Our Articles
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Latest From Our Blog
          </h2>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white text-orange-600 px-4 py-1.5 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-4">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm leading-6">
                    {blog.description}
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-700">
                      By {blog.author}
                    </span>

                    <button className="text-orange-500 font-semibold text-sm hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-800">
              No articles found!
            </h3>
            <p className="text-gray-500 mt-2">
              Try searching with another keyword.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-orange-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Stay Inspired!
          </h2>

          <p className="text-gray-600 mt-4">
            Subscribe to our newsletter and get the latest event
            planning tips and creative ideas.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
