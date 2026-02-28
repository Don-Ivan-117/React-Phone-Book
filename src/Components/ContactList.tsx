import type { Contact } from "../types"

type ContactListProps = {
    contacts: Contact[],
    editContact: (contact: Contact) => void,
    removeContact: (id: string) => void,
}

export default function ContactList({contacts,editContact, removeContact}: ContactListProps) {
    return (
        <div className="md:w-1/2 lg:3/5 mx-5 md:h-screen overflow-y-scroll">
            {
                contacts.length ? (
                    <>
                        <div className="space-y-4">
                            {contacts.map((contact) => (
                                <>
                                    <div key={contact.id} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex justify-between">
                                        <div>
                                            <h3 className="font-semibold text-lg">
                                                {contact.firstName} {contact.lastName} <span className="text-sm text-gray-400">({contact.id})</span>
                                            </h3>
                                            <p className="text-gray-600">
                                                📞 {contact.phoneNumber}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button 
                                                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
                                                onClick={() => {editContact(contact)}}
                                                >
                                                Edit
                                            </button>

                                            <button 
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                                                onClick={()=> {removeContact(contact.id)}}
                                                >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    
                                </>
                                
                                
                                
                            ))}
                        </div>
                    </>
                ): (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay Contactos recientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando contactos {''}
                            <span className="text-indigo-600 font-bold">para poder verlos</span>
                        </p>
                    </>
                )
            }
        </div>
    )
}
