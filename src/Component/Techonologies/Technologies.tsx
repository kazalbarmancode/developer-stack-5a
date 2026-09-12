import { use, useState } from "react";
import type { TechnologiesDataType } from "../Types/Types";
import TechnologiesCard from "./TechonologiesCard";
import SelectedStack from "./selectedCard";

export interface TechnologiesProps {
    dataPromise:Promise<TechnologiesDataType[]>
}

const Technologies = ({ dataPromise}: TechnologiesProps) => {
    const datas = use(dataPromise)
    const [selectedStack,setSelectedStack]=useState <TechnologiesDataType[]>([])
    
    return (
         <div className="container mx-auto px-4 md:px-10 ">
      <div className="mt-8 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
          Explore the Technologies
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {datas.map((data, ind) => (
            <TechnologiesCard
              key={data.id || ind}
              data={data}
               selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            />
          ))}
        </div>
           <div className="lg:col-span-3">
          <SelectedStack
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
          />
        </div>
       

      </div>
    </div>
  );
}


export default Technologies;