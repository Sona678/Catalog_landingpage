import React from 'react';

export const Form = () => {
  return (
    <div className="container mx-auto mt-12 px-4">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Contact Us
        </h1>
        <p>
          If you have any further inquiries, please let us know by <br />
          filling out the form below
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <form>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="first-name" className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="last-name" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className='flex justify-center'>
          <button
            type="submit"
            className="border-2 border-cyan-500 text-black px-2 py-1 rounded-md"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
