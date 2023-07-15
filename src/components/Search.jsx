import { useState } from "react"
import { useNavigate } from "react-router-dom";



function Search() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }

  return (
    <form onSubmit={submitHandler} className=" flex justify-center   ">
        <div className="w-[50%] ">
        
        <input 
        
            type="text" 
            value={input}
            onChange={(e)  => setInput(e.target.value) }
            placeholder="Search"
            className="  border-0 bg-white md:text-[1.5rem] p-2   w-full text-black rounded-2xl outline-0 "
            />
            
        </div>
    </form>
  )
}

export default Search