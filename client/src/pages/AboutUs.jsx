import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-[1rem] px-4 md:px-6 mxl:px-0">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>

      <div className="custom-template grid grid-cols-1 lg:grid-cols-[1.5fr_8fr] gap-5 custom-w  rounded-lg py-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Welcome</h3>
        <p className="leading-relaxed">
          Welcome to our innovative platform, seamlessly integrating the power
          of the MERN stack with WordPress for dynamic web experiences. Our
          journey began with the vision to merge modern web development
          techniques with the flexibility and robustness of WordPress, creating
          a unique blend that offers the best of both worlds.
        </p>
      </div>

      <div className="custom-template grid grid-cols-1 lg:grid-cols-[1.5fr_8fr] gap-5 custom-w  rounded-lg py-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-nowrap">What We Do</h3>
        <p className="leading-relaxed">
          We specialize in automating WordPress operations using a robust MERN
          (MongoDB, Express, React, Node.js) architecture. This approach allows
          us to leverage the extensive capabilities of WordPress while
          maintaining the high performance and scalability provided by the MERN
          stack. Our solution is designed to automate content management, page
          creation, and customizations efficiently, reducing manual effort and
          enhancing productivity.
        </p>
      </div>

      <div className="custom-template grid grid-cols-1 lg:grid-cols-[1.5fr_8fr] gap-5 custom-w  rounded-lg py-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-nowrap">Key Features</h3>
        <ul className="list-disc list-inside leading-relaxed">
          <li>
            Seamless Integration: Combining WordPress with the MERN stack to
            provide a cohesive and efficient web development experience.
          </li>
          <li>
            Automated Content Management: Utilizing APIs and automation scripts
            to create and manage WordPress pages dynamically.
          </li>
          <li>
            Enhanced Security: Implementing custom API key-based authentication
            to secure interactions with WordPress, ensuring that sensitive
            credentials remain protected.
          </li>
          <li>
            CI/CD Implementation: Streamlined continuous integration and
            deployment processes to ensure rapid and reliable updates,
            maintaining the highest standards of code quality and performance.
          </li>
        </ul>
      </div>

      <div className="custom-template custom-w grid grid-cols-1 lg:grid-cols-[1.5fr_8fr]  rounded-lg py-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-nowrap">Our Approach</h3>
        <p className=" leading-relaxed">
          We employ a user-friendly, API-driven methodology to interact with
          WordPress, enabling users to create, update, and manage content
          effortlessly. By integrating custom REST API endpoints with API key
          authentication, we provide a secure and scalable solution for dynamic
          content management. Our CI/CD pipelines ensure that every update is
          deployed seamlessly, offering continuous improvements and feature
          enhancements.
        </p>
      </div>

      <div className="custom-template custom-w  grid grid-cols-1 lg:grid-cols-[1.5fr_8fr] rounded-lg py-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-nowrap">
          Why Choose Us?
        </h3>
        <p className=" leading-relaxed">
          Our platform is designed for modern developers who seek efficiency,
          security, and scalability. Whether you are managing a blog, an
          e-commerce site, or a corporate website, our integration of the MERN
          stack with WordPress provides the flexibility and power you need to
          deliver exceptional web experiences.
        </p>
      </div>

      <div className="custom-template custom-w  grid grid-cols-1 lg:grid-cols-[1.5fr_8fr] rounded-lg py-6">
        <h3 className="text-xl font-semibold mb-4 text-nowrap">Join Us</h3>
        <p className="leading-relaxed">
          Join us on this exciting journey and discover how we are transforming
          the web development landscape by integrating cutting-edge technologies
          with the timeless reliability of WordPress.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
