import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Signup from "./Signup";

const FormLog = () => {
  const handleSign = () => {
    return <Signup />;
  };
    return (
      <Form className="formLogin">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="accelwtf@gmail.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="e92ksofh2"
          />
        </FormGroup>
        <Button onClick={handleSign()}>Login</Button>
      </Form>
    );
}

export default FormLog();
