import React from "react";
import type { FC } from "react";
import { PostCategoryForm } from "@presentational";

const PostCategoryPage: FC = () => {
  return (
    <div>
      <h1>post category</h1>
      <PostCategoryForm />
    </div>
  );
};

export { PostCategoryPage };
