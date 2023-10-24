import UserComponent from "./UserComponent";

const UsersComponent = ({users}) => {


    return (
        <div style={{display:'flex', flexFlow:'wrap', width:'100vw'}}>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;