import React from 'react';
import UserContainer from "./UsersContainer/UserContainer";
import CommentsContainer from "./CommentsContainer/CommentsContainer";

const JsonApiComponent = () => {
    return (
        <>
           <UserContainer/>
           <CommentsContainer/>
        </>
    );
};

export default JsonApiComponent;