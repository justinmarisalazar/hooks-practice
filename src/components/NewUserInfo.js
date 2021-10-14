import React, { useEffect, useState } from 'react'

function NewUserInfo() {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(promise => promise.json())
        .then(data => setUser(data));
    }, []);

    return (
        <div>
                User Info:<br />
                Name: {user.name}<br />
                Username: {user.username}<br />
                Email: {user.email}
            </div>
    )
}

export default NewUserInfo
