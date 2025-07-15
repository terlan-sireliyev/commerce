import React from "react";

const About_Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <div className="w-full max-w-3xl space-y-10">
        <h1 className="text-center text-4xl font-extrabold text-gray-800">
          About Us
        </h1>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">
            Our Mission
          </h2>
          <p className="leading-relaxed text-gray-700">
            Our mission is to create exceptional value for our customers through
            innovation, quality, and unparalleled customer service. We are
            committed to making a positive impact in the industries we serve.
          </p>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">
            Meet the Team
          </h2>
          <p className="leading-relaxed text-gray-700">
            Our dedicated team of professionals brings a unique blend of skills
            and passion to every project. Together, we are working to build a
            brighter future for our clients and communities.
          </p>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">
            Our Story
          </h2>
          <p className="leading-relaxed text-gray-700">
            Since our founding, we have been driven by a desire to make a
            difference. Our journey has been one of growth and learning, and we
            are proud of our achievements and the partnerships we've built along
            the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_Page;
