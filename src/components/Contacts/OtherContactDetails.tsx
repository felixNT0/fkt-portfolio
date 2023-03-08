import React from "react";

function OtherContactDetails() {
  return (
    <>
      <div className="pb-8">
        <p
          data-aos="slide-right"
          data-aos-delay="50"
          className="text-4xl font-bold inline border-b-4 border-gray-500 dark:text-white text-black"
        >
          I'D LOVE TO HEAR FROM YOU
        </p>
        <p
          data-aos="slide-down"
          data-aos-delay="50"
          className="py-6 dark:text-white text-black"
        >
          If you are interested to hire me I am always open to new opportunities
          and interesting projects! Feel free to contact me if you have any
          other requests or questions regarding web development.
        </p>
      </div>

      <h1
        data-aos="slide-right"
        data-aos-delay="50"
        style={{ textAlign: "center" }}
        className="dark:text-white text-black"
      >
        REACH OUT TO ME DIRECTLY ON -{" "}
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          className="bg-[#fca61f] dark:bg-[#4db5ff]"
        >
          +2349032328670 / +2348083015143
        </span>
      </h1>
      <br></br>

      <h1 style={{ textAlign: "center" }}>OR</h1>
      <br></br>
    </>
  );
}

export default OtherContactDetails;
