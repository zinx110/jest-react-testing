import React from "react";

type GreetProps = {
    name?: string;
};

export const Greet2 = ({ name }: GreetProps) => {
    console.log("saud");
    return <div>Hello {name}</div>;
};
