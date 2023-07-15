import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';






function Veggie() {

  
  const [veggie, setVeggie] = useState([])
  
  useEffect(() => {
      getVeggie()
  },[])


  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

  if(check){
    setVeggie(JSON.parse(check))
  }else{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=10&tags=vegetarian`)
    const data = await api.json()
      localStorage.setItem("veggie",JSON.stringify(data.recipes))
        setVeggie(data.recipes)
        console.log(data.recipes)
        
  } 
}



  return (
   <div>

            <div className=" m-[4rem_0rem]">
              <h3 className="text-3xl md:text-8xl py-9 font-black">Our Vegetarian Picks</h3>

              <div
      
      className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            
              >
              {veggie.map((recipe) => {
                return(
                  <>
                  <div key={recipe.id}>
                
                  <div className=" h-56 w-full rounded-xl overflow-hidden relative">
                  <Link to={'/recipe/'+ recipe.id}>
                    <p className=" absolute  bg-transparent text-xl shadow-lg text-white z-10 font-bold left-5 top-[80%] ">{recipe.title}</p>
                    <img className="rounded-xl absolute  left-0 w-full h-full object-cover" src={recipe.image} alt={recipe.title} />
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



export default Veggie