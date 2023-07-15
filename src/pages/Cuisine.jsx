import { useParams,Link } from "react-router-dom"
// import {motion} from 'framer-motion'
import { useEffect, useState } from "react"



function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&number=10&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    }

    useEffect(()=> {
        
        getCuisine(params.type)
    },[params.type])
  return (
    <div className=" h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
        {
            cuisine.map((item) => {
                return(
                    <div key={item.id} >
                          <Link to={'/recipe/'+ item.id}>

                        <img className="w-full rounded-3xl " src={item.image} alt="" />
                        <h4 className="text-center p-4">{item.title}</h4>
                          </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cuisine