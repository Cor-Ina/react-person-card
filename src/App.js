
import React from "react"
import Star from './Star'
import './App.css';

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    // used before creating the Star component
    // let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

    // function toggleFavorite() {
    //   setContact(prevContact => {
    //       return {
    //           ...prevContact,
    //           isFavorite: !prevContact.isFavorite
    //       }
    //   })
    // }
    
    function toggleFavorite() {
      setContact(prevContact => ({
          ...prevContact,
          isFavorite: !prevContact.isFavorite
      }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" alt="" />
                <div className="card--info">
                    <Star isFilled = {contact.isFavorite} handleClick = {toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

