import React from "react";

function Footer() {
  return (
    <div className="text-center p-6 bg-black footer">
      <div data-aos="slide-right" data-aos-delay="50">
        <span className="text-white">
          &copy; {new Date().getFullYear()} Copyright -{" "}
        </span>
        <span className="link-underline text-white font-bold">
          Felix Kolo Tsowa
        </span>
      </div>
    </div>
  );
}

export default Footer;
