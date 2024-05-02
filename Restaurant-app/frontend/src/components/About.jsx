import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Here is a good paragraph for your "About Us" section:

"At Royal-Taste&Tonic, we are passionate about food and dedicated to providing exceptional dining experiences. Our team of talented chefs and staff work together to create delicious dishes and ensure that every customer leaves satisfied. With a focus on quality, creativity, and customer service, we strive to make every meal memorable. Welcome to @Royal-Taste&Tonic, where great food and great service come together to create unforgettable moments."
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
