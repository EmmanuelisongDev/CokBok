import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Recipes() {
    let params = useParams()
    const [details, setDetails] = useState([])
    const [activeTab, setActiveTab] = useState("instructions")

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_API_KEY}`) 
        const detailData = await data.json()
        setDetails(detailData)
        console.log(detailData)
      
    }

    useEffect(() => {
      fetchDetails()
    },[params.name])

  return (
  <div className="h-full m-[4%]"> 
    <h1 className="font-black text-5xl md:text-8xl py-9">{details.title}</h1>
    <div className=" flex flex-col md:flex-row gap-5 mb-16 ">
      <h3 className="font-semi-bold text-lg md:text-xl lg:leading-loose w-full h-full md:w-1/2" dangerouslySetInnerHTML={{__html:details.summary}}></h3>
    <img  className="w-full md:w-1/2 object-cover rounded-xl " src={details.image} alt={details.title} />
    </div>

    <div>
      <button className={activeTab ==="instructions"?" scale-110 font-black  text-xl text-orange-600 mr-4 ":"text-xl"} onClick={() => setActiveTab("instructions")}>Instructions</button>
      <button className={activeTab ==="ingredients"? "scale-110 font-black text-xl text-orange-600 ml-4 ":"text-xl"} onClick={() => setActiveTab("ingredients")}>Ingredients</button>

      {activeTab ==="instructions"&&
      <div className=" leading-loose  font-medium text-lg md:text-xl">
        <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
      </div>
      }

{activeTab ==="ingredients" &&
      <ul className=" font-medium text-lg md:text-xl list-disc">
          {
            details.extendedIngredients?.map((ingredient) => (
                <li className="mt-7" key={ingredient.id}>{ingredient.original}</li>
              ) 
            )
          }
      </ul>

}
    </div>
  </div>
  )
}

export default Recipes