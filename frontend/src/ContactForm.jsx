import { useState } from "react";
import { motion } from "framer-motion";
import { LuClipboardCheck } from "react-icons/lu";

export const ContactForm = ({ existingContact = {}, updateCallback }) => {
  const [firstName, setFirstName] = useState(existingContact.firstName || "");
  const [lastName, setLastName] = useState(existingContact.lastName || "");
  const [email, setEmail] = useState(existingContact.email || "");

  const updating = Object.entries(existingContact).length !== 0;

  const theSubtmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
    };

    const url =
      "http://127.0.0.1:5000/" +
      (updating ? `update_contact/${existingContact.id}` : "create_contact");
    const options = {
      method: updating ? "PATCH" : "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json();
      alert(data.message);
    } else {
      updateCallback();
    }
  };

  return (
    <form onSubmit={theSubtmit} className=" border-b p-2 border-gray-300 my-5 rounded-md hover:rounded-none transition ease-out hover:ease-in duration-300 delay-100 backdrop-blur-sm shadow-lg shadow-slate-200 hover:shadow-slate-200/20">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
          <div className="sm:col-span-6 mb-2 ">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-100"
            >
              First name
            </label>
            <div className="mt-2 ">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="first name"
                autoComplete="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block pl-1 w-full rounded-md hover:drop-shadow-xl
                border-0 py-1.5 text-gray-100 shadow-sm 
                ring-1 ring-gray-400 transition ease-out hover:ease-in
                placeholder:text-gray-600 placeholder:italic 
                focus:ring-none focus:shadow-slate-200 focus:shadow-md
                sm:text-sm sm:leading-6 hover:scale-x-105"
              />
            </div>
          </div>

          <div className="sm:col-span-6 mb-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-100"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="last name"
                autoComplete="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block pl-1 w-full rounded-md hover:drop-shadow-xl
                border-0 py-1.5 text-gray-100 shadow-sm 
                ring-1 ring-gray-400 transition ease-out hover:ease-in
                placeholder:text-gray-600 placeholder:italic 
                focus:ring-none focus:shadow-slate-200 focus:shadow-md
                sm:text-sm sm:leading-6 hover:scale-x-105"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-100 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block pl-1 w-full rounded-md hover:drop-shadow-xl
                border-0 py-1.5 text-gray-100 shadow-sm 
                ring-1 ring-gray-400 transition ease-out hover:ease-in
                placeholder:text-gray-600 placeholder:italic 
                focus:ring-none focus:shadow-slate-200 focus:shadow-md
                sm:text-sm sm:leading-6 hover:scale-x-105"
              />
            </div>
          </div>
        </div>
      </div>

      <motion.button
        type="submit"
        
        className="
        bg-green-700 
        text-gray-300
        hover:text-white 
        hover:font-semibold 
        p-1 
        my-5
        rounded-md shadow-none 
        hover:shadow-lg
        active:bg-green-800
        "
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        whileHover={{
          scale: 1.1,
        }}
      >
        {updating ? "Update" : "Create"} <LuClipboardCheck className="inline" />
      </motion.button>
    </form>
  );
};
