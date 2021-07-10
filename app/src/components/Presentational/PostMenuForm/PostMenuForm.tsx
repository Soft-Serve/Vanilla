import { Input, Button } from "@base";
import React, { FormEvent, useState } from "react";
import type { FC } from "react";
import { useGlobalContext } from "src/contexts";
import { usePostMenuMutation } from "./PostMenu.mutation";

const PostMenuForm: FC = () => {
  const { restaurantID } = useGlobalContext();
  const [input, setInput] = useState({
    name: "",
    __typename: "Mutation",
    id: 0,
    restaurant_id: restaurantID,
  });

  const [postMenu] = usePostMenuMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMenu({
      variables: {
        input,
      },
      optimisticResponse: {
        __typename: "Mutation",
        postMenu: {
          id: input.id,
          name: input.name,
          restaurant_id: restaurantID,
          __typename: input.__typename,
        },
      },
    });
    setInput(prevInput => ({ ...prevInput, name: "" }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={input.name}
        onChange={e => setInput({ ...input, name: e.target.value })}
        labelText="menu"
      />
      <Button type="submit">submit</Button>
    </form>
  );
};

export { PostMenuForm };
