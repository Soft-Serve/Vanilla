import React, { useState } from "react";
import type { FC } from "react";
import { Input, Button } from "@base";
import { useSignInFormMutation } from "./SignInForm.mutation";

const SignInForm: FC = () => {
  // const [password, setPassword] = useState(" ");
  // const [email, setEmail] = useState(" ");
  const [signIn, { data }] = useSignInFormMutation();
  const [input, setInput] = useState({ email: "", password: "" });

  console.log(data);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn({
          variables: {
            input,
          },
        });
      }}
    >
      <Input
        onChange={(e) => setInput({ ...input, email: e.target.value })}
        value={input.email}
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        labelText="email"
      />

      <Input
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
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
