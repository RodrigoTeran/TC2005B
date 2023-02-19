import React from "react";
import type { ICHAT } from "./Chat.types";


interface Props {
    chat: ICHAT;
    isActive: boolean;
}

const Chat: React.FunctionComponent<Props> = ({
    chat,
    isActive
}) => {
    return (
        <>
            <div tabIndex={1} className={`w-full p-2 h-20 hover:bg-slate-50 cursor-pointer flex items-center gap-2 ${isActive && "bg-slate-100 hover:bg-slate-100"}`}>
                <div className="w-14 h-14 flex justify-center items-center">
                    <img src={chat.profileImg} alt={chat.name} className="rounded-full w-10/12 h-10/12 border border-indigo-200" />
                </div>
                <div className="flex-1 h-full flex flex-col justify-center gap-y-2">
                    <div className="font-bold">{chat.name}</div>
                    <div className="truncate w-72 ">{chat.lastMsgText}</div>
                </div>
            </div>
            <div
                style={{
                    height: "1px"
                }}
                className="w-10/12 bg-indigo-200 m-auto"
            ></div>
        </>
    )
};

export default Chat;