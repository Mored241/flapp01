import { useState } from "react";
import { useEffect } from "react";
import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";
import { LuClipboardSignature, LuXOctagon } from "react-icons/lu";
import { motion, Reorder } from "framer-motion";


function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({});


  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact({});
  };

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  const openEditModal = (contact) => {
    if (isModalOpen) return;
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  const onUpdate = () => {
    closeModal();
    fetchContacts();
  };

  return (
    <>
      <div className="md:container p-10 md:mx-auto h-screen text-center m-0">
        <p className="sm:text-2xl md:text-3xl font-bold hover:text-purple-400 mb-12 ">
          ~ The Contact List Manager ~
        </p>

        <hr />

        <div className="rounded shadow-md bg-green-900 pb-5">
          <motion.button
            onClick={openCreateModal}
            className=" p-1 bg-white font-semibold hover:font-bold text-gray-700 rounded 
            shadow-none hover:shadow-lg hover:text-green-800
            active:bg-gray-300 mt-20"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{ scale: 1 }}
          >
            Create New Contact <LuClipboardSignature className="inline" />
          </motion.button>

          <div>
            {isModalOpen && (
              <div className="modal py-6">
                <div className="modal-content md:w-2/5 mx-auto px-22">
                  <ContactForm
                    existingContact={currentContact}
                    updateCallback={onUpdate}
                  />
                  <span className="close" onClick={closeModal}>
                    <motion.button
                      className="bg-amber-600 text-red-900 px-2 py-1 my-2 rounded 
                  hover:text-white shadow
                  active:bg-amber-700 "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      whileHover={{
                        scale: 1.1,
                      }}
                    >
                      <p className="shadow-md">
                        <spann>
                          Close <LuXOctagon className="inline" />
                        </spann>
                      </p>
                    </motion.button>
                  </span>
                </div>
              </div>
            )}
          </div>


          <ContactList
            contacts={contacts}
            updateContact={openEditModal}
            updateCallback={onUpdate}
          />
        </div>

        
      <p className="motion-safe:animate-pulse">Copyright</p>

      </div>
    </>
  );
}

export default App;
