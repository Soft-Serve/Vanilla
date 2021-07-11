import type { MutationHookOptions } from "@apollo/client";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const SIGN_OUT_MUTATION = gql`
  mutation SignOutMutation($input: input) {
    signOut(input: $input) @rest(type: SignOut, path: "users/sign_out", method: "DELETE") {
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

interface SignOutData {
  user: User;
}

interface Variables {
  input: Record<string, unknown>;
}

const useSignOutMutation = (options?: MutationHookOptions<SignOutData, Variables>) =>
  useMutation<SignOutData, Variables>(SIGN_OUT_MUTATION, options);

export { useSignOutMutation };

export const foo = "sd";
