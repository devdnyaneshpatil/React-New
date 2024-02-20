import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";
import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Adduser from "./Adduser";

function Users() {
  const url = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        setUsers(data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const addUser=(newUser)=>{
      setUsers((prevUsers)=>[...prevUsers,newUser])
  }
  return (
    <>
      <Adduser addUser={addUser}></Adduser>
      <SimpleGrid templateColumns="repeat(5, 1fr)" gap={6}   >
        {users.map((el) => {
          return <User user={el} key={el._id}></User>;
        })}
      </SimpleGrid>
    </>
  );
}

export default Users;
