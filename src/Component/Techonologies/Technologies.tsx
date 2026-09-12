import { use } from "react";
import type { TechnologiesDataType } from "../Types/Types";

export interface TechnologiesProps {
    dataPromise:Promise<TechnologiesDataType[]>
}

const Technologies = ({ dataPromise}: TechnologiesProps) => {
    const datas = use(dataPromise)
    
    return (
        <div>
            {datas.map(data=><p>{data.category}</p> )}
        </div>
    )
}

export default Technologies;