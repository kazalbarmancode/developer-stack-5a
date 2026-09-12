
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
      <Technologies dataPromise={dataPromise}></Technologies>
      <Footer></Footer>
    </>
  )
}

export default App
