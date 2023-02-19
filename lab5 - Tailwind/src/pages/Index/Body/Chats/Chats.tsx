import React, { Fragment } from "react";
import Input from "../../../../components/Input/Input";
import { chats } from "./chats.example";
import Chat from "./Chat/Chat";
import type { ICHAT } from "./Chat/Chat.types";

const Chats: React.FunctionComponent = () => {
  return (
    <div className="w-96 border-r border-slate-300 bg-white">
      <div className="w-full p-2">
        <Input className="py-2 rounded outline-none px-4 bg-indigo-50" placeholder="Busca un chat o inicia uno nuevo" />
      </div>
      <div>
        {chats.map((chat: ICHAT, index: number) => {
          return (
            <Fragment key={index}>
              <Chat isActive={index === 0} chat={chat} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
};

export default Chats;