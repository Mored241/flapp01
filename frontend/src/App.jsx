import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";



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
      <div className="md:container md:mx-auto">
        <p className="text-3xl font-bold hover:text-purple-400 my-2 ">
          ~ The Contact List ~
        </p>
        <hr />
        <div className="rounded shadow-md bg-orange-900">
          <ContactList
            contacts={contacts}
            updateContact={openEditModal}
            updateCallback={onUpdate}
          />
          <button onClick={openCreateModal}>Create New Contact</button>
        </div>
        <div>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <ContactForm
                  existingContact={currentContact}
                  updateCallback={onUpdate}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
