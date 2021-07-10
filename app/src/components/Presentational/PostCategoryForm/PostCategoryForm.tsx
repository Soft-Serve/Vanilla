import { Input, Button, Dropdown } from "@base";
import React, { FormEvent, useState } from "react";
import type { FC } from "react";
import { useMenusQuery } from "src/shared";
import { Listbox } from "@headlessui/react";
import {
  optionSelectedStateStyles,
  optionStyles,
  optionWrapperStyles,
} from "src/components/Base/Dropdown/styles";
import { CheckIcon } from "@heroicons/react/solid";
import { usePostCategoryMutation } from "./PostCategory.mutation";

const PostCategoryForm: FC = () => {
  const { data, loading } = useMenusQuery();

  const [selectedMenu, setSelectedMenu] = useState(data?.menus[0]);

  const [input, setInput] = useState({
    name: "",
    category_type: "food",
    __typename: "Mutation",
    id: 0,
    menu_id: selectedMenu?.id ? selectedMenu.id : 0,
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
    setInput(prevInput => ({ ...prevInput, name: "" }));
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      {loading ? (
        <p>loading </p>
      ) : (
        <Dropdown label="select menu" value={selectedMenu} onChange={setSelectedMenu}>
          {data?.menus.map(menu => (
            <Listbox.Option
              key={menu.id}
              className={({ active }) => optionWrapperStyles(active)}
              value={menu}
            >
              {({ selected, active }) => (
                <>
                  <span className={optionSelectedStateStyles(selected)}>{menu.name}</span>

                  {selected ? (
                    <span className={optionStyles(active)}>
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Dropdown>
      )}
      <Input
        value={input.name}
        onChange={e => setInput({ ...input, name: e.target.value })}
        labelText="category"
      />
      <Button type="submit">submit</Button>
    </form>
  );
};

export { PostCategoryForm };
