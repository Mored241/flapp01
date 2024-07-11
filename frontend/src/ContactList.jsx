import React, { useState } from "react";
import { motion } from "framer-motion";
import Contact from "./Contact";

export const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const onDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(
        `http://127.0.0.1:5000/delete_contact/${id}`,
        options
      );
      if (response.status === 200) {
        updateCallback();
      } else {
        console.error("Failed to delete");
      }
    } catch (error) {
      alert(error);
    }
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="">
      <h2>- - -</h2>

      <motion.table
        className="table-auto p-2 bg-dark mx-auto my-10 rounded "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <caption class="caption-top m-2">
          Table 10.1: List of contacts that is managed by the backend database.
        </caption>

        <thead className="bg-green-700 text-[1.3em]">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <motion.tr
              key={contact.id}
              variants={item}
              className="hover:bg-gray-900 odd:bg-[#282828]"
              ayoutId={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <motion.td>{contact.id}</motion.td>
              <motion.td>{contact.firstName}</motion.td>
              <motion.td>{contact.lastName}</motion.td>
              <motion.td>{contact.email}</motion.td>
              <motion.td>
                <motion.button
                  onClick={() => updateContact(contact)}
                  className="bg-blue-800 rounded font-bold active:bg-blue-900 hover:bg-blue-700 p-1 m-1"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 16,
                  }}
                  whileHover={{
                    rotate: 10, 
                    scale: 1.1,
                  }}
                >
                  Update
                </motion.button>

                <motion.button
                  onClick={() => onDelete(contact.id)}
                  className="bg-red-800 rounded font-bold active:bg-red-900 hover:bg-red-700 p-1 m-1"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 360,
                    damping: 20,
                  }}
                  whileHover={{
                    rotate: -10,
                  }}
                >
                  Delete
                </motion.button>
              </motion.td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>

    </div>
  );
};
