import { useState, useEffect } from "react";
import './App.css';
import { resturant } from "./dumy_data";
import FoodStory from "./components/foodStory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
export default function App() {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);
   const [tolal, setTotal]=useState({
    count:0, price:0
   })
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setCurrentRestaurantIndex((prev) =>
        prev < resturant.length - 1 ? prev + 1 : prev
      );
    } else {
      setCurrentRestaurantIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const restaurant = resturant[currentRestaurantIndex];

  return (
    <>
     <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <h1>Resturants: {restaurant.name}</h1>
      <FoodStory storyImages={restaurant.images} />
      <AddedCard  tolal={tolal} setTotal={setTotal}/>
    </div>
    <ToastContainer position="top-center" autoClose={2000} />
    </>
   
  );
}

function AddedCard({ tolal, setTotal}){
  return(
    <div style={{borderTop:"2px solid gray", width:"100%", background:"#f8f8f8", display:"flex",alignItems:"center", justifyContent:"space-between", padding:"1rem"}}>
      <button
      style={{padding:"0.7rem 2rem",cursorL:"pointer", background:"blue", color:"#fff",border:"0", borderRadius:"0.3rem"}}
      
      onClick={()=>{
        setTotal((prev)=>({
          count:prev.count+1,
          price:prev.price+15,
        }))
         toast.success("Added to cart");
      }}>Add to Card</button>
      <div>
        <p>Add to Cart - <span style={{fontWeight:"700", fontSize:"1.5rem", color:"blue"}}>{tolal.count}</span>, modifications -<span style={{fontWeight:"700", fontSize:"1.5rem", color:"blue"}}>${tolal.price}</span> </p>
      </div>

    </div>
  )
}
