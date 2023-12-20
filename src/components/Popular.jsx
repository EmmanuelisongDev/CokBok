import { useEffect, useState } from "react"
// import {Splide, SplideSlide} from '@splidejs/react-splide'
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';





function Popular() {

  
  const [popular, setPopular] = useState([])
  
  useEffect(() => {
      getPopular()
  },[])


  const getPopular = async () => {
    const check = localStorage.getItem("popular");

  if(check){
    setPopular(JSON.parse(check))
  }else{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=10`)
    const data = await api.json()
      localStorage.setItem("popular",JSON.stringify(data.recipes))
        setPopular(data.recipes)
        console.log(data.recipes)
        
  } 
}



  return (
   <div>

            <div className=" m-[4rem_0rem]">
              <h3 className=" font-black text-3xl md:text-8xl py-9 ">Popular Picks</h3>

              <div
            className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
              >
              {popular.map((recipe) => {
                return(
                  <>
                  <div className="bg-gradient-to-t from-black to-white" key={recipe.id}>
                
                  <div className=" min-h-[300px] md:min-h-[560px]  w-full rounded-xl overflow-hidden relative">
                    <Link to={'/recipe/'+ recipe.id}>
                    <p className=" absolute z-10 bg-transparent font-bold left-5 top-[80%] ">{recipe.title}</p>
                  
                    <img className=" bg-gradient-to-t from-black to-white bg-black rounded-xl absolute  left-0 w-full h-full object-cover" src={recipe.image} alt={recipe.title} /> 
                    
                    </Link>
                  </div>
                  </div>
                  </>
                )
              })}
              </div>
            </div>
  
</div>
  )
}



export default Popular