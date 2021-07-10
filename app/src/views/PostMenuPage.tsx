import React from "react";
import type { FC } from "react";
import { PostMenuForm } from "@presentational";

const PostMenuPage: FC = () => {
  return (
    <div>
      <h1>post menu</h1>
      <PostMenuForm />
    </div>
  );
};

export { PostMenuPage };
