import { useQuery } from "@apollo/client";
import { AllergyQuery } from "@graphql";
import { GET_ALLERGIES } from "./queries";

const useAllergies = (restaurantID: number) => {
    const useGetAllergies = () => {
        const { data, loading, error } = useQuery<AllergyQuery>(GET_ALLERGIES, {
            variables: {
                restaurantID,
            },
        });

        return {
            data,
            loading,
            error,
        };
    };

    return {
        useGetAllergies,
    };
};
export { useAllergies };
