import { useEffect, useState } from "react"
import type { Contact, DrafContact } from "../types";

export const useContact = () => {
    const initialContact : DrafContact = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
    };

    const initialContactList = () : Contact[] => {
        const localStorageContact= localStorage.getItem("contacts");
        return localStorageContact ? JSON.parse(localStorageContact) : []
    }

    const [contacts, setContacts] = useState<Contact[]>(initialContactList)
    const [contactForm, setContactForm] = useState<DrafContact>(initialContact)
    const [activeId, setActiveId] = useState<Contact['id'] | null>(null)

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(activeId){
            // Edit
            setContacts(prev => prev.map(contact => contact.id === activeId ? {...contactForm, id:activeId} : contact));
            setActiveId(null);
        }else{
            // Add
            const newContact : Contact = {
                ...contactForm,
                id: crypto.randomUUID()
            };
            setContacts(prev => [...prev, newContact]);
        }
        setContactForm(initialContact)
    }

    const editContact = (contact: Contact) => {
        setContactForm(contact)
        setActiveId(contact.id)
        console.log(activeId);
    }

    const removeContact = (id : Contact["id"] ) => {
        setContacts(prevContact => prevContact.filter(contact => contact.id !== id))
    }

    return{
        initialContact,
        contacts, 
        contactForm,
        activeId,
        setContactForm,
        setContacts,
        handleInputChange,
        handleSubmit,
        removeContact,
        editContact
    }
}