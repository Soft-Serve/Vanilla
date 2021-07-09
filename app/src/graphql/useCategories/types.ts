export interface Category {
    id: number;
    name: string;
    category_type: string;
    menu_id: number;
    __typename: string;
}

export interface CategoryQuery {
    categories: Category[];
}

export interface Variables {
    input: Category;
}

export interface PostCategoryMutationData {
    __typename: string;
    postCategory: Category;
}

export interface DeleteCategoryMutationData {
    __typename: string;
    deleteCategory: Category;
}
