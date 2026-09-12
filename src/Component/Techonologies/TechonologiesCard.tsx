import { IoMdStar } from "react-icons/io";
import type { TechnologiesDataType } from "../Types/Types";
import type { Dispatch, SetStateAction } from "react";

export interface TechnologiesCardProps {
  data: TechnologiesDataType;
  selectedStack: TechnologiesDataType[];
  setSelectedStack: Dispatch<SetStateAction<TechnologiesDataType[]>>;
}

export default function TechnologiesCard({
  data,
  selectedStack,
  setSelectedStack,
}: TechnologiesCardProps) {
  const handleAddToStack = () => {
    const addDataStack = selectedStack.find((item) => item.id === data.id);
    if (!addDataStack) {
      setSelectedStack([...selectedStack, data]);
    }
  };
  const isAdded = Boolean(selectedStack.find((item) => item.id === data.id));
  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={data.icon}
            className="w-10 h-10 object-contain"
            alt={data.name}
          />
          <h2 className="text-xl font-bold text-gray-800">{data.name}</h2>
        </div>
        <span className="text-xs btn font-semibold px-3 py-1 text-[#0369A1]  rounded-2xl">
          {data.badge || data.difficulty}
        </span>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2">{data.description}</p>

      <div className="flex justify-between items-center text-xs border-t pt-3 border-gray-100">
        <span className="px-2.5 py-1 bg-purple-100 text-purple-700 rounded-md font-medium">
          {data.category}
        </span>
        <div className="flex items-center gap-3 text-gray-500 font-medium">
          <span>{data.difficulty}</span>
          <span className="text-amber-500 flex items-center font-semibold">
            <IoMdStar /> {data.rating}
          </span>
        </div>
      </div>
      <button
        onClick={() => handleAddToStack()}
        disabled={isAdded}
        className={`w-full mt-2 font-medium py-2 rounded-xl  ${
          isAdded
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-black hover:bg-gray-800 text-white"
        }`}
      >
        {isAdded ? "Added to Stack " : "Add to Stack"}
      </button>
    </div>
  );
}
