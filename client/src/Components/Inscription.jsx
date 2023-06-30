import React, { useState } from "react";
import { Link } from "react-router-dom";

const Inscription = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const profile = { username, email, password, firstName, lastName, telephoneNumber, address };

        const response = await fetch("localhost:3000/user/", {
            //const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profile)
        })
        const result = await response.json();
        console.log(result);
    }

    return (
        <>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} id="username" required placeholder="gégédu69" />
                {username.length == 0 && <p className="errorMessage">Veuillez renseigner ce champ</p>}
                <label htmlFor="email">E-mail</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" required placeholder="gégédu69@gmail.com" />
                {email.length == 0 && <p className="errorMessage">Veuillez renseigner ce champ</p>}
                <label htmlFor="password">Mot de passe</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" required placeholder="************" />
                {password.length == 0 && <p className="errorMessage">Veuillez renseigner ce champ</p>}
                <label htmlFor="firstName">Prénom</label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} id="firstName" placeholder="Gérard" />
                <label htmlFor="lastName">Nom de famille</label>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} id="lastName" placeholder="Du Moulin" />
                <label htmlFor="telephoneNumber">Numéro de téléphone</label>
                <input type="tel" value={telephoneNumber} onChange={e => setTelephoneNumber(e.target.value)} id="telephoneNumber" placeholder="0x xx xx xx xx" />
                <label htmlFor="address">Adresse</label>
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} id="address" placeholder="7 allée du pot aux roses, 69330 Meyzieu" />
                <button type="submit">Envoyer</button>
            </form>
            <p>Vous avez déjà un compte ?</p>
            <Link to="/Connexion">Se connecter</Link>
        </>
    );
}

export default Inscription;