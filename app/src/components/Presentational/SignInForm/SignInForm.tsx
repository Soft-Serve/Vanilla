import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import type { FC } from "react";
import { Input, Button } from "@base";
import { useGlobalContext } from "src/contexts";
import { useSignInFormMutation } from "./SignInForm.mutation";

const SignInForm: FC = () => {
  const { currentUser, setCurrentUser } = useGlobalContext();
  const [signIn, { data }] = useSignInFormMutation({
    onCompleted: completedData => {
      console.log(completedData);
      setCurrentUser("completedData.user");
    },
  });
  const [loginData, setInput] = useState({ email: "", password: "" });
  console.log(currentUser);
  const history = useHistory();
  const input = { user: loginData };
  console.log(data);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn({
      variables: {
        input,
      },
    });
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={e => setInput({ ...loginData, email: e.target.value })}
        value={loginData.email}
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        labelText="email"
      />

      <Input
        value={loginData.password}
        onChange={e => setInput({ ...loginData, password: e.target.value })}
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        labelText="password"
        placeholder="Password"
      />

      <Button type="submit">Sign in</Button>
    </form>
  );
};

export { SignInForm };
