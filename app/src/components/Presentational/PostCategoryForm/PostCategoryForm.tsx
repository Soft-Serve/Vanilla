import { Input, Button } from "@base";
import React, { FormEvent, useState } from "react";
import type { FC } from "react";
import { usePostCategoryMutation } from "./PostCategoryForm.mutation";

const PostCategoryForm: FC = () => {
  const [input, setInput] = useState({
    name: "",
    category_type: "food",
    __typename: "Mutation",
    id: 0,
    menu_id: 2,
  });

  const [postCategory] = usePostCategoryMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postCategory({
      variables: {
        input,
      },
      optimisticResponse: {
        __typename: "Mutation",
        postCategory: {
          id: input.id,
          name: input.name,
          menu_id: input.menu_id,
          category_type: input.category_type,
          __typename: input.__typename,
        },
      },
    });
    setInput((prevInput) => ({ ...prevInput, name: "" }));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        value={input.name}
        onChange={(e) => setInput({ ...input, name: e.target.value })}
        labelText="category"
      />
      <Button type="submit">submit</Button>
    </form>
  );
};

export { PostCategoryForm };
