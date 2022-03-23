import { ReactComponent as Face } from "../assets/images/Face.svg";
import { ReceiverTextInterface } from "../interfaces";

export default function ReceiverText(props: ReceiverTextInterface) {
  return (
    <div className="flex mt-8 ml-3">
      <Face />
      <div className="flex bg-widget-100 p-3 w-max " style={{ borderRadius: "5px 20px 20px 20px" }}>
        <p className="text-xs -mt-8 -ml-2 absolute">Penny</p>
        <div className="text-sm">{props.text}</div>
      </div>
    </div>
  );
}
