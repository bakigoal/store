import {useTitle} from "../utils/useTitle";
import React from "react";

const title = "Users";

const list = [
    {
        name: 'User 1',
        age: 23
    },
    {
        name: 'User 2',
        age: 32
    },
    {
        name: 'User 3',
        age: 21
    },
    {
        name: 'User 4',
        age: 45
    },
];

const Users = () => {
    useTitle(title)

    let userBlock = user => {
        return (
            <div>
                <h3>{user.name}</h3>
                <p>Age: {user.age}</p>
            </div>
        );
    }

    return (
        <div>
            {list.map(user => userBlock(user))}
        </div>
    );
}

export default Users