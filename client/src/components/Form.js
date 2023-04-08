import { useState } from "react";
import usersService from "../services/users";

function Form() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [hobbies, setHobbies] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        if (name === "name") {
            setName(value);
        } else if (name === "number") {
            setNumber(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "hobbies") {
            setHobbies(value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        // adding the user 
        const newUser = { name, number, email, hobbies }
        console.log(newUser)

        usersService.create(newUser)
        console.log(`user ${name} save!!!`)

        setName('')
        setNumber('')
        setEmail('')
        setHobbies('')
        alert(name, 'saved')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} value={name} />
                </label>
                <br />
                <label>
                    Number:
                    <input type="text" name="number" onChange={handleChange} value={number} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleChange} value={email} />
                </label>
                <br />
                <label>
                    Hobbies:
                    <input type="text" name="hobbies" onChange={handleChange} value={hobbies} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form