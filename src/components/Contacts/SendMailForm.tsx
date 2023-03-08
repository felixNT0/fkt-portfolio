import { useState } from "react";

function SendMailForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  function handleSubmit(e: any) {
    if (values.name && values.email && values.message) {
      setTimeout(() => {
        e.target.reset();
      }, 500);
    } else {
      alert("value can't be empty");
    }
  }
  return (
    <div className=" flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        action="https://getform.io/f/5d3543d6-d1df-4039-8d76-daef9bb0d17f"
        className=" flex flex-col w-full md:w-1/2"
      >
        <input
          data-aos="zoom-in"
          data-aos-delay="30"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          onChange={handleChange}
          className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
        />
        <input
          data-aos="slide-right"
          data-aos-delay="40"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={handleChange}
          className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
        />
        <textarea
          data-aos="fade-up"
          data-aos-delay="50"
          name="message"
          placeholder="Enter your message"
          rows={10}
          required
          onChange={handleChange}
          className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
        ></textarea>

        <button
          data-aos="slide-down"
          data-aos-delay="60"
          type="submit"
          className="text-white bg-[#fca61f] dark:bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default SendMailForm;
