import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";

import Users from "../components/UserContainer/Users";

const UsersPage = () => {

    const {data} = useLoaderData()

    return (
        <div style={{display: "flex", width: '100%'}}>
            <Users users={data}/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;