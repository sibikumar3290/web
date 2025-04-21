import React from "react";

const testimonials = [
  {
    name: "John Doe",
    title: "Business Analyst",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with real image URL
    quote:
      '“MACH AURA DATALOGIX provided accurate, timely data support for our projects. Their approach and attention to detail made a big difference in our workflow.”',
  },
  {
    name: "Maria Garcia",
    title: "Insurance Agent",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with real image URL
    quote:
      "I was impressed with the precision and speed of their data entry services. It’s rare to find a team this committed to confidentiality and quality.",
  },
  {
    name: "Mason Miller",
    title: "Residential Appraiser",
    image: "https://randomuser.me/api/portraits/men/75.jpg", // Replace with real image URL
    quote:
      "They handled our property data processing efficiently and flawlessly. Excellent communication and a dependable team—we’ll definitely work with them again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Testimonials</h2>
        <p className="text-gray-600 mb-10">What Our Clients Say</p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-left"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
