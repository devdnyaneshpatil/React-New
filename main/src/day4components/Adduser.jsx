import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function Adduser({addUser}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/users/register",formData,{
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>{
        const data=res.data
        console.log(data)
        const payload={
            _id:data.newUser._id,
            name:data.newUser.name,
            email:data.newUser.email,
        }
        console.log(payload)
        addUser(payload)
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="password">Name</FormLabel>
            <Input
              id="name"
              name="name"
              type="text"
              variant="filled"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              variant="filled"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              variant="filled"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>
          <Checkbox id="rememberMe" name="rememberMe" colorScheme="purple">
            Remember me?
          </Checkbox>
          <Button type="submit" colorScheme="purple" width="full">
            Add User
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default Adduser;
