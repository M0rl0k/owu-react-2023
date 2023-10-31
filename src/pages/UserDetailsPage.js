import React from 'react';
import {useLoaderData} from "react-router-dom";

import UserDetails from "../components/UserContainer/UserDetails";

const UserDetailsPage = () => {

    const {data} = useLoaderData()

    return (
        <div style={{width: '50%'}}>
            <h2>User details</h2>
            <UserDetails userDetails={data}/>
        </div>
    );
};

export default UserDetailsPage;