import React from 'react'

export const ContactList = ({ contacts, updateContact, updateCallback }) => {
    
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error) {
            alert(error)
        }
    }


  return (
    <div className=''>
        <h2>Contacts</h2>
        <table className='table-fixed p-2 bg-dark mx-auto my-10'>
            <thead>
                <tr className='bg-red-500 text-center justify-between'>
                    <th className='pr-5'>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>
                            <button onClick={() => updateContact(contact)} className='bg-blue-700 rounded font-bold active:bg-blue-800 hover:bg-blue-900 p-2 m-1'>Update</button>
                            <button onClick={() => onDelete(contact.id)} className='bg-red-700 rounded font-bold active:bg-red-800 hover:bg-red-900 p-2 m-1'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p className='motion-safe:animate-pulse'>Copyright</p>
    </div>
  )
}
