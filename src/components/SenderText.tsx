import { SenderTextInterface } from "../interfaces";

export default function SenderText(props: SenderTextInterface) {
  return (
    <div className="flex flex-col mt-4 ml-3 w-full items-end  pr-8 justify-end">
      <div className="flex bg-widget-300 text-white p-3 w-max " style={{ borderRadius: "15px 5px 15px 15px" }}>
        <p className="text-sm">{props.text}</p>
      </div>
      <p className="text-xs pt-1 text-gray-500">{props.time}</p>
    </div>
  );
}
