import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { FC } from "react";
import * as styles from "./styles";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    labelText: string;
}

const Input: FC<Props> = ({ labelText, type, id, name, placeholder, ...rest }) => {
    return (
        <div>
            <label htmlFor={name} className="sr-only">
                Email address
            </label>
            <label htmlFor={name} className={styles.label}>
                {labelText}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                className={styles.input}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    );
};

export { Input };
