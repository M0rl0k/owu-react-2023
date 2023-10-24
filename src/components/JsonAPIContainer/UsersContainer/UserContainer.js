import React, {useEffect, useState} from 'react';

import UserFormComponent from "./UserFormComponent";
import {jsonAPIservice} from "../../../services/json-API-service/jsonAPIservice";
import UsersComponent from "./UsersCopmonent";

const UserContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        jsonAPIservice.getUsers().then(({data})=> setUsers(data))
    }, [])

    return (
        <>
            <UserFormComponent setUsers={setUsers}/>
            <UsersComponent users={users}/>
        </>
    );
};

export default UserContainer;