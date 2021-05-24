import React from "react";
import type { FC } from "react";
import { Input, Button } from "@base";

const SignInForm: FC = () => {
  return (
    <form>
      <Input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        labelText="email"
      />

      <Input
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
