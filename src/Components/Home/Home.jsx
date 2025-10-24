import Baners from "../Baners/Baners"
import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products"



const Home = ()=>{
    return(
    <>
    <Navbar/>
    <Baners/>
    <div className="produc-container-card">
    <Products/>
    </div>
    </>
    )
}
export default Home