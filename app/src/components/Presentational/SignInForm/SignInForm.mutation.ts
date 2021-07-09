import type { MutationHookOptions } from "@apollo/client";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const SIGN_IN_FORM_MUTATION = gql`
    mutation SignInFormMutation($input: input) {
        signIn(input: $input) @rest(type: SignIn, path: "users/sign_in", method: "POST") {
            __typename
            id
            email
            first_name
            last_name
            role
        }
    }
`;

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    __typename: string;
}

interface SignInFormData {
    user: User;
}

interface Variables {
    input: Record<string, unknown>;
}

const useSignInFormMutation = (options?: MutationHookOptions<SignInFormData, Variables>) =>
    useMutation<SignInFormData, Variables>(SIGN_IN_FORM_MUTATION, options);

export { useSignInFormMutation };
