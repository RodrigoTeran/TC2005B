import React from "react";

interface Props {
    className: string;
    placeholder: string;
}

const Input: React.FunctionComponent<Props> = ({
    className,
    placeholder
}) => {
    return (
        <input placeholder={placeholder} className={`w-full ${className}`} type="text" name="input" />
    )
};

export default Input;