import { useState, useEffect } from "react";
import usersService from "../services/users";

function Users(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll(response => setUsers(response))
    }, [])

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <h3>Users:</h3>
            <ul>
            {users.map((item, i) => (
                <li key={i}>
                    <b>Name:</b>{capitalize(item.name)}
                    <br />
                    <b>Phone number:</b>{item.number}
                    <br />
                    <b>Email id:</b>{item.email}
                    <br />
                    <b>Hobbies:</b>
                    <ul>
                        {item.hobbies.map((hobby, i) => <li key={i}>{capitalize(hobby)}</li>)}
                    </ul>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default Users;