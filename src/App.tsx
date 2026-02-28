import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
// import TicTacToe from "./Components/TicTacToe";
import { useContact } from "./hooks/useContact";

function App() {
  const { contactForm, handleInputChange, handleSubmit, contacts,editContact, removeContact, activeId} = useContact()
  return (
    <>
      <div className="container mx-auto mt-20">
          <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
            React Phone {''}
            <span className="text-indigo-700">Agenda</span>
          </h1>

          <div className="mt-12 md:flex ">
              <ContactForm contactForm={contactForm}  handleInputChange={handleInputChange} handleSubmit={handleSubmit} activeId={activeId} />
              <ContactList contacts={contacts} removeContact={removeContact} editContact={editContact}/>
              {/* <TicTacToe></TicTacToe> */}
          </div>
      </div>
    </>
  )
}

export default App
