import Baners from "../Baners/Baners"
import NavBar from "../NavBar/NavBar"
import Products from "../Products/Products"



const Home = ()=>{
    return(
    <>
    <NavBar/>
    <Baners/>
    <div className="produc-container-card">
    <Products/>
    </div>
    </>
    )
}
export default Home