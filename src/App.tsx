import React, { useState } from "react";
import ChatBubbles from "./components/ChatBubbles";
import MainChat from "./components/MainChat";
import { ChatInterface } from "./interfaces";

function App() {
  const [openWidget, setopenWidget] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [count, setcount] = useState(1);
  const [chat, setchat] = useState<ChatInterface[] | []>([
    {
      type: "receiver",
      text: "Please let me know your name?",
      time: "",
    },
  ]);

  async function ReplyMessage(inputValue: string) {
    function ShowFirst() {
      setchat([
        ...chat,
        {
          type: "sender",
          text: inputValue,
          time: prnDt,
        },
        {
          type: "receiver",
          text: <ChatBubbles />,
          time: prnDt,
        },
      ]);
    }

    function ShowSecond() {
      setchat([
        ...chat,
        {
          type: "sender",
          text: inputValue,
          time: prnDt,
        },
        {
          type: "receiver",
          text: "What would you like to do " + inputValue,
          time: prnDt,
        },
      ]);
    }

    function ShowThird() {
      setchat([
        ...chat,
        {
          type: "sender",
          text: inputValue,
          time: prnDt,
        },
        {
          type: "options",
          option: ["View Recipes", "Meal Plan", "Buy Products", "Get Help", "FAQs"],
          text:"",
          time: prnDt,
        },
      ]);
    }
    switch (count) {
      case 1:
        await ShowFirst();
        await setTimeout(ShowSecond, 1000);
        break;
      case 2:
        await ShowFirst();
        await setTimeout(ShowThird, 1000);
        break;
      default:
        setchat([
          ...chat,
          {
            type: "sender",
            text: inputValue,
            time: prnDt,
          },
        ]);
        break;
    }
  }

  const handleOpenWidget = () => {
    setopenWidget(true);
  };

  const handleCloseWidget = () => {
    setopenWidget(false);
  };
  const [buttonClicked, setbuttonClicked] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const handleButtonClicked = (index: string) => {
    switch (index) {
      case "option1":
        setbuttonClicked((prevState) => ({ ...buttonClicked, option1: !prevState.option1 }));
        break;
      case "option2":
        setbuttonClicked((prevState) => ({ ...buttonClicked, option2: !prevState.option2 }));
        break;
      case "option3":
        setbuttonClicked((prevState) => ({ ...buttonClicked, option3: !prevState.option3 }));
        break;
      case "option4":
        setbuttonClicked((prevState) => ({ ...buttonClicked, option4: !prevState.option4 }));
        break;
      case "option5":
        setbuttonClicked((prevState) => ({ ...buttonClicked, option5: !prevState.option5 }));
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event: any) => {
    setinputValue(event.target.value);
  };

  let prnDt = new Date().toLocaleTimeString("en-us", { weekday: "short", hour: "2-digit", minute: "2-digit", hour12: true });

  const handleSend = async () => {
    if (inputValue.trim().length > 0) {
      await setcount(count + 1);

      await ReplyMessage(inputValue);

      await setinputValue("");
    }
  };


  return (
    <MainChat
      chat={chat}
      buttonClicked={buttonClicked}
      handleOpenWidget={handleOpenWidget}
      handleCloseWidget={handleCloseWidget}
      handleSend={handleSend}
      inputValue={inputValue}
      handleInputChange={handleInputChange}
      handleButtonClicked={handleButtonClicked}
      openWidget={openWidget}
    />
  );
}

export default App;
