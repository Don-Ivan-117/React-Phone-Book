export type Contact = {
    id: string
    firstName: string,
    lastName: string,
    phoneNumber: string,
}

export type DrafContact = Omit<Contact, "id">