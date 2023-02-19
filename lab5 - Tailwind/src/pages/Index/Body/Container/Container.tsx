import React from "react";
import Input from "../../../../components/Input/Input";
import Message from "./Message/Message";
import type { IMEESSAGE } from "./Message/Message.types";
import { messages } from "./messages.example";

const Container: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col flex-1">
      <div style={{
        "height": "753px"
      }} className="flex flex-col justify-start items-start gap-y-3 p-3 overflow-y-auto">
        {messages.map((example: IMEESSAGE, index: number) => {
          return (
            <React.Fragment key={index}>
              <Message message={example} />
            </React.Fragment>
          )
        })}
      </div>
      <div className="w-full p-2 bg-slate-100">
        <Input className="py-2 rounded outline-none px-4 bg-indigo-50" placeholder="Escribe un mensaje aquí" />
      </div>
    </div>
  )
};

export default Container;