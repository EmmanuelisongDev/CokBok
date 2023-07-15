
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"




function Searched() {
 let params = useParams()

 const [searched, setSearched] = useState([])


    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&number=10&query=${name}`)
        const recipes = await data.json()
        setSearched(recipes.results)
    }

    useEffect(()=> {
        
        getSearched(params.search)
    },[params.search])

  return (
    <div className=" h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
    {
            searched?.map((item) => {
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

export default Searched