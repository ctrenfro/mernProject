import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
      { id: "u1", 
      name: "Chris Renfro", 
      image: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      places: 3 }
    ];

  return <UsersList items={USERS} />;
};

export default Users;
