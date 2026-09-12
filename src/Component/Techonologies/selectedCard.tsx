
import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesDataType } from "../Types/Types";


interface SelectedStackProps {
  selectedStack: TechnologiesDataType[];
  setSelectedStack:Dispatch<SetStateAction<TechnologiesDataType[]>>
}

export default function SelectedStack({
   
  selectedStack,
  setSelectedStack
}: SelectedStackProps) {

    const handleRemove = (id: string | number) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };
  return (
    <div className=" rounded-2xl p-5 bg-white shadow-sm h-fit">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Your Stack</h2>
        
      </div>

      {selectedStack.length === 0 ? (
        <p className="text-gray-400 text-sm">No technologies selected yet.</p>
      ) : (
        <div className="space-y-3">
          {selectedStack.map((item, ind) => (
            <div
              key={item.id || ind}
              className="flex justify-between items-center p-3  rounded-xl bg-gray-50"
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <span className="font-semibold text-gray-700 text-sm">
                  {item.name}
                </span>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-gray-400 hover:text-red-500 font-bold text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="">

      {selectedStack.length > 0 && (
          <button
            onClick={()=>handleRemoveAll()}
            className="mt-5 w-full text-center btn border  text-red-500 font-semibold"
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
}