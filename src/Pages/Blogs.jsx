import React from 'react';
import Image from '../Components/Image';

const blogs = [
  {
    id: 1,
    title: "How to Optimize Shipping Routes for Efficiency",
    date: "September 10, 2024",
    image: "images/blog1.jpeg",
    excerpt: "Learn how to optimize your shipping routes to reduce costs and improve delivery times.",
  },
  {
    id: 2,
    title: "The Future of Logistics with AI and Automation",
    date: "August 25, 2024",
    image: "images/blog2.jpeg",
    excerpt: "Discover how AI and automation are revolutionizing the logistics industry.",
  },
  // Add more blogs here...
];
const whatsappUrl = `https://wa.me/9040170727?text=Hello, I would like to inquire about your services."`;
    

const Blogs = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] md:h-[400px] p-2">
      {/* Background Image */}
      <img
        src="images/truck.jpg" // Replace with your image URL
        alt="About Us Background"
        className="w-full h-full object-cover"
      />

      {/* Full-width background with centered text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white text-3xl md:text-6xl font-bold">
          Our Blogs
        </h1>
      </div>
    </div>
      

      {/* Blog Grid Section */}
      <section className="py-5 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
                  <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                  <div className="text-blue-500 hover:text-blue-700 font-semibold">
                    Read More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <button className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300">Previous</button>
          <span>Page 1 of 1</span>
          <button className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300">Next</button>
        </div>
      </section>

      
    </div>
  );
};

export default Blogs;
