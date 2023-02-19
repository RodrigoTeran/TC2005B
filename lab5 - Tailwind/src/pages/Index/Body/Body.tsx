import React from "react";
import Chats from "./Chats/Chats";
import Container from "./Container/Container";

const Body: React.FunctionComponent = () => {
    return (
        <div className="w-full flex-1 flex">
            <Chats />
            <Container />
        </div>
    )
};

export default Body;