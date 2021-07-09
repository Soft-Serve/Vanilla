import React, { useState } from "react";
import type { FC } from "react";
import { Input, Button } from "@base";
import { useSignInFormMutation } from "./SignInForm.mutation";

const SignInForm: FC = () => {
    const [signIn] = useSignInFormMutation();
    const [loginData, setInput] = useState({ email: "", password: "" });

    const input = { user: loginData };

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
                onChange={(e) => setInput({ ...loginData, email: e.target.value })}
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
                onChange={(e) => setInput({ ...loginData, password: e.target.value })}
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
