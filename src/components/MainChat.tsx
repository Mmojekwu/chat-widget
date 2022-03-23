import React from "react";
import { ReactComponent as BackButton } from "../assets/images/BackButton.svg";
import { ReactComponent as CancelButton } from "../assets/images/CancelButton.svg";
import { ReactComponent as MinimizeButton } from "../assets/images/MinimizeButton.svg";
import { ReactComponent as SendButton } from "../assets/images/SendButton.svg";
import { ReactComponent as Emoji } from "../assets/images/Emoji.svg";
import { ReactComponent as Attachment } from "../assets/images/Attachment.svg";
import { ReactComponent as ChatIcon } from "../assets/images/ChatIcon.svg";

import ReceiverText from "./ReceiverText";
import SenderText from "./SenderText";
import ReceiverOptions from "./ReceiverOptions";
import { MainChatProps } from "../interfaces";

export default function MainChat(props: MainChatProps) {
  return (
    <div className="h-screen">
      <div className="relative h-full w-full">
        <button
          className="h-14 w-14 rounded-full absolute top-3/4 left-3/4"
          onClick={props.handleOpenWidget}
        >
            <ChatIcon width="100%" height="100%"/>
        </button>

        {props.openWidget && (
          <div className="flex flex-col content-center h-3/4 w-96  bg-white absolute bottom-16 right-24" style={{ height: "78%" }}>
            <div className="h-60 bg-widget-300 w-full">
              <div className="flex pt-6 items-center justify-between mx-auto" style={{ width: "90%" }}>
                <div className="flex  items-center">
                  <BackButton className="cursor-pointer" />
                  <div className="pr-2 pl-6">
                    <p className="text-white font-medium">Start a Conversation</p>
                    <p className="text-sm text-widget-100">Penny is set!</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <MinimizeButton className="cursor-pointer" />
                  <CancelButton className="cursor-pointer" onClick={props.handleCloseWidget} />
                </div>
              </div>
            </div>

            <div
              className="mx-auto relative -top-8 bg-white rounded-xl xl:rounded-2xl overflow-y-auto  overflow-x-hidden"
              style={{ width: "90%", height: "60rem", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)" }}
            >
              <p className="pt-5 pl-6 pb-3 text-widget-300 font-medium">Start a Conversation</p>
              <div className="overflow-y-auto  overflow-x-hidden" style={{ height: "40rem" }}>
                {props.chat.map((data, index) => (
                  <React.Fragment key={index}>
                    {data.type === "receiver" && <ReceiverText text={data.text} />}
                    {data.type === "sender" && <SenderText text={data.text} time={data.time} />}
                    {data.type === "options" && (
                      <ReceiverOptions handleButtonClicked={props.handleButtonClicked} buttonClicked={props.buttonClicked} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex justify-between items-center rounded fixed bottom-28 ml-3 bg-white p-2 border border-widget-300 w-max min-w-[20rem] drop-shadow-[0_16px_rgba(255,255,255,1)]">
                <div className="flex">
                  <Attachment className="cursor-pointer" />
                  <Emoji className="cursor-pointer ml-2" />
                </div>
                <input
                  type="text"
                  value={props.inputValue}
                  onChange={props.handleInputChange}
                  placeholder="Type your message here"
                  className="px-3 w-full focus-visible:outline-none"
                />
                <SendButton className="cursor-pointer ml-2" onClick={props.handleSend} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
