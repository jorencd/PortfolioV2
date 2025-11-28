import React, { useState } from "react";
import emailjs from "https://esm.sh/emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const { name, email, message } = formData;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_qaaf1qg",
        "template_jq7021s",
        templateParams,
        "QWJkr_3fxiqYqi8rQ"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccess(true); 
          setError(false);
          setLoading(false); 
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
          setSuccess(false); 
          setError(true); 
          setLoading(false); 
        }
      );
  };

  const closeModal = () => {
    setSuccess(false);
    setError(false);
  };

  return (
    <div className="mb-15 mt-10 bg-[#ffffff] rounded-xl" id="contact">
      <div className="max-w-5xl px-4 py-10 mx-auto lg:py-20 lg:px-10 md:px-10">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-neutral-700 text-2xl font-semibold md:text-4xl md:leading-tight">
            Get in Touch
          </h2>
          <p className="mt-1 text-gray-900">
            Whether you're looking to start a new project, need assistance with
            your web development.. Drop me a message, and let’s make your vision come
            to life!
          </p>
        </div>

        {/* Success and Error Floating Alerts */}
        {success && (
          <div className="fixed z-50 w-full max-w-xs p-4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg left-1/2 top-1/2 bg-teal-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center text-teal-800 bg-teal-200 border-4 border-teal-100 rounded-full size-8">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
                <div className="ms-3">
                  <h3 className="font-semibold text-gray-800">
                    Successfully sent.
                  </h3>
                  <p className="text-sm text-gray-700">
                    Your message has been sent successfully.
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal} // Fixed the button to call closeModal
                className="text-gray-500 hover:text-gray-800"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="fixed z-50 w-full max-w-xs p-4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg left-1/2 top-1/2 bg-red-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center text-red-800 bg-red-200 border-4 border-red-100 rounded-full size-8">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                <div className="ms-3">
                  <h3 className="font-semibold text-gray-800">
                    Error!
                  </h3>
                  <p className="text-sm text-gray-700">
                    Oops! Something went wrong. Please try again later.
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal} // Fixed the button to call closeModal
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="fixed z-50 flex gap-3 flex-wrap justify-center p-4 md:p-12 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <button
              disabled
              type="button"
              className="focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-6 py-3 text-center inline-flex items-center animate-pulse bg-green-500 hover:bg-green-600"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-5 h-5 mr-2 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                ></path>
              </svg>
              Please wait..
            </button>
          </div>
        )}

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="pb-10 mb-10 border-b md:order-2 border-neutral-800 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Name input */}
                <div className="relative">
                  <input
                    required
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer p-3 sm:p-4 block w-full border-transparent rounded-lg sm:text-sm placeholder:text-transparent focus:outline-hidden focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2 bg-neutral-100 text-neutral-800"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="text-neutral-700 absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400"
                  >
                    Name
                  </label>
                </div>

                {/* Email input */}
                <div className="relative">
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer p-3 sm:p-4 block w-full border-transparent rounded-lg sm:text-sm placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2 bg-neutral-100 text-neutral-900"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="text-neutral-700 absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400"
                  >
                    Email
                  </label>
                </div>

                {/* Message input */}
                <div className="relative">
                  <textarea
                    required
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="peer p-3 sm:p-4 block w-full border-transparent rounded-lg sm:text-sm placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2 bg-neutral-100 text-neutral-900"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="text-neutral-700 absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-neutral-400"
                  >
                    Send message
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  All fields are required
                </p>

                <p className="mt-5">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-600 font-medium text-sm text-white rounded-full focus:outline-hidden"
                  >
                    Submit
                    <svg
                      className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-14 text-gray-900">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="grow">
                <h4 className="font-semibold">Address:</h4>
                <address className="mt-1 text-sm not-italic">
                  Sampaga, San Antonio
                  <br />
                  Quezon, Philippines
                </address>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h4 className="font-semibold">Email:</h4>
                <a
                  className="mt-1 text-sm focus:outline-hidden"
                  href="mailto:jorencemendoza2@gmail.com"
                >
                  jorencemendoza2@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <h4 className="font-semibold">
                  Let's Build Something Amazing Together!
                </h4>
                <p className="mt-1">
                  With a passion for both art and technology, I bring creative
                  solutions and a sharp eye for design to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
