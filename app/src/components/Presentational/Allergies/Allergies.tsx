import React from "react";
import type { FC } from "react";
import { useGlobalContext } from "@contexts";
import { AllergiesToggle } from "./AllergiesToggle";
import { useAllergiesQuery } from "./Allergies.query";

const Allergies: FC = () => {
    const { restaurantID } = useGlobalContext();
    const { data, loading, error } = useAllergiesQuery({
        variables: {
            restaurantID,
        },
    });
    if (loading) return <p>loading...</p>;
    if (error) return <p>error</p>;
    return (
        <div className="mt-6 relative flex-1 px-4 sm:px-6">
            {data?.allergies.map((allergy) => (
                <div key={allergy.id}>
                    <AllergiesToggle allergy={allergy} />
                    <span>{allergy.name}</span>
                </div>
            ))}
        </div>
    );
};

export { Allergies };
