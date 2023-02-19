import React from "react";
import Nav from "../../components/Nav/Nav";
import Body from "./Body/Body";

const IndexPage: React.FunctionComponent = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col">
            <Nav />
            <Body />
        </div>
    )
};

export default IndexPage;