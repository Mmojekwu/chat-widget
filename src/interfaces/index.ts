import { buttonClickedType, textType } from "../types";

export interface ChatInterface {
  type: string;
  text?: string | JSX.Element;
  time: string;
  option?: string[];
}

export interface MainChatProps {
  handleOpenWidget: () => void;
  handleCloseWidget: () => void;
  handleSend: () => void;
  handleInputChange: (event: any) => void;
  handleButtonClicked: (index: string) => void;
  buttonClicked: buttonClickedType;
  openWidget: Boolean;
  chat: [] | ChatInterface[];
  inputValue:string;
}

export interface ReceiverOptionsInterface {
  buttonClicked: buttonClickedType;
  handleButtonClicked: (a: string) => void;
}

export interface ReceiverTextInterface {
  text: textType;
}

export interface SenderTextInterface {
  text: textType;
  time: string;
}
