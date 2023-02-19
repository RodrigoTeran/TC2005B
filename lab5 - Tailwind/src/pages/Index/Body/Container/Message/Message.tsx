import React from "react";
import type { IMEESSAGE } from "./Message.types";

interface Props {
    message: IMEESSAGE
}

const Message: React.FunctionComponent<Props> = ({
    message
}) => {
    return (
        <div className={`flex flex-col gap-y-1 ${message.fromMe === true ? "ml-auto items-end" : ""}`}>
            <div className={`flex flex-col max-w-sm p-4 rounded ${message.fromMe === true ? "bg-slate-400 mr-6" : "bg-indigo-500 ml-6"} text-white`}>
                {message.text}
            </div>
            <div className={`w-10 h-10 flex justify-center items-center`}>
                <img className="rounded-full w-10/12 h-10/12 border border-indigo-200" src={message.profileImg} alt="Profile" />
            </div>
        </div>
    )
};

export default Message;