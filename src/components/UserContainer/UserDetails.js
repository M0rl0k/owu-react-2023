import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './UserDetails.module.css'

const UserDetails = ({userDetails}) => {

    const navigate = useNavigate()

    const {id, email, name, phone, username, website,
        address:{city, street, suite, zipcode, geo: {lat, lng}},
        company:{bs, catchPhrase, name:companyName}
    } = userDetails

    return (
        <div className={css.UserDetails}>
            <h2>User details</h2>
            <p>id: {id}</p>
            <p>email: {email}</p>
            <p>name: {name}</p>
            <p>phone: {phone}</p>
            <p>username: {username}</p>
            <p>website: {website}</p>
            Address:
            <p>city: {city}</p>
            <p>street: {street}</p>
            <p>suite: {suite}</p>
            <p>zipcode: {zipcode}</p>
            Geo data:
            <p>lat: {lat}</p>
            <p>lng: {lng}</p>
            Company:
            <p>bs: {bs}</p>
            <p>catchPhrase: {catchPhrase}</p>
            <p>name: {companyName}</p>
            <button onClick={() => navigate('posts')}>Post of user</button>
        </div>
    );
};

export default UserDetails;