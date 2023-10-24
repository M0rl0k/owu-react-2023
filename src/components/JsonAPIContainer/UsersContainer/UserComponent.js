import React from 'react';

const UserComponent = ({user}) => {
     const {id, name, username, email, website} = user;

    return (
        <div style={{width:'250px', border:'2px solid grey'}}>
            <h3>id: {id}</h3>
            <h3>name: {name}</h3>
            <h3>username: {username}</h3>
            <h3>email: {email}</h3>
            <h3>website: {website}</h3>
        </div>
    );
};

export default UserComponent;