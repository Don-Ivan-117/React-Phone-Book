import type { DrafContact } from "../types";

type ContactFormProps = {
    contactForm: DrafContact,
    activeId: string | null,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement, Element>) => void,
    handleSubmit: (e: React.FormEvent<Element>) => void
}

export default function ContactForm({contactForm, activeId, handleInputChange, handleSubmit}: ContactFormProps) {

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Agregar contactos</h2>
    
            <p className="text-lg mt-5 text-center mb-10">
                Añade Contactos y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="firstName" className="text-sm uppercase font-bold">
                        Nombre 
                    </label>
                    <input  
                        id="firstName"
                        required
                        name="firstName"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Juan" 
                        value={contactForm.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="lastName" className="text-sm uppercase font-bold">
                        Apellido 
                    </label>
                    <input  
                        id="lastName"
                        required
                        name="lastName"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Pablo" 
                        value={contactForm.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="phoneNumber" className="text-sm uppercase font-bold">
                        Numero de Telefono
                    </label>
                    <input  
                        id="phoneNumber"
                        maxLength={10}
                        minLength={10}
                        required
                        inputMode="numeric"
                        name="phoneNumber"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="951-234-341" 
                        value={contactForm.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={activeId? "Guardar cambios" : "Añadir Contacto"}
                />
            </form>
        </div>
    )
}
