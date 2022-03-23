import { ReceiverOptionsInterface } from "../interfaces";

export default function ReceiverOptions(props: ReceiverOptionsInterface) {
  return (
    <div className="space-x-2 text-xs space-y-2 max-w-[200px] ml-auto mr-3 mt-3">
      <button
        className={`border border-widget-300 rounded-full p-3  min-w-[80px] ${props.buttonClicked.option1 && "bg-widget-300 text-white"}`}
        onClick={() => props.handleButtonClicked("option1")}
      >
        View Recipes
      </button>
      <button
        className={`border border-widget-300 rounded-full p-3  min-w-[80px] ${props.buttonClicked.option2 && "bg-widget-300 text-white"}`}
        onClick={() => props.handleButtonClicked("option2")}
      >
        Meal Plan
      </button>
      <button
        className={`border border-widget-300 rounded-full p-3  min-w-[80px] ${props.buttonClicked.option3 && "bg-widget-300 text-white"}`}
        onClick={() => props.handleButtonClicked("option3")}
      >
        Buy Products
      </button>
      <button
        className={`border border-widget-300 rounded-full p-3  min-w-[80px] ${props.buttonClicked.option4 && "bg-widget-300 text-white"}`}
        onClick={() => props.handleButtonClicked("option4")}
      >
        Get Help
      </button>
      <button
        className={`border border-widget-300 rounded-full p-3  min-w-[80px] ${props.buttonClicked.option5 && "bg-widget-300 text-white"}`}
        onClick={() => props.handleButtonClicked("option5")}
      >
        FAQs
      </button>
    </div>
  );
}
