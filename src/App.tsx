
import { Suspense } from 'react'
import './App.css'
import { Banner } from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import { Nav } from './Component/Nav/Nav'
import Technologies from './Component/Techonologies/Technologies'
import type { TechnologiesDataType } from './Component/Types/Types'


const dataFecth = async():Promise<TechnologiesDataType[]>=>{
  const res = await fetch('../data.json');
  const data = await res.json();
  return data
}
const dataPromise =dataFecth()

function App() {
 
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<div className="flex flex-col justify-center items-center min-h-[60vh] w-full">
<div className="w-14 h-14 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
      </div>}>
        <Technologies dataPromise={dataPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
