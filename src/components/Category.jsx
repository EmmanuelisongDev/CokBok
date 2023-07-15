import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div className='  flex gap-3 justify-center m-[2rem_0rem]'>
        <NavLink className={` active:bg-orange-600  bg-white text-black md:h-24 md:w-24 w-8 h-8 cursor-pointer  flex flex-col justify-center items-center rounded-[50%]`} to={'/cuisine/Italian'}>
            <FaPizzaSlice className='bg-transparent'/>
            <h4 className='hidden bg-transparent md:block'>Italian</h4>
        </NavLink>
        <NavLink className={`  active:bg-orange-600 bg-white text-black  md:h-24 md:w-24   w-8 h-8  cursor-pointer  flex flex-col justify-center items-center rounded-[50%]`} to={'/cuisine/American'}>
            <FaHamburger className='bg-transparent'/>
            <h4 className='bg-transparent hidden md:block'>American</h4>
        </NavLink>
        <NavLink className={`  active:bg-orange-600 bg-white text-black md:h-24 md:w-24  w-8 h-8  cursor-pointer flex flex-col justify-center items-center rounded-[50%]`} to={'/cuisine/Japanese'}>
            <GiChopsticks className='bg-transparent'/>
            <h4 className='bg-transparent hidden md:block'>Japanese</h4>
        </NavLink>
        <NavLink className={`  active:bg-orange-600 bg-white text-black  md:h-24 md:w-24  w-8 h-8 cursor-pointer  flex flex-col justify-center items-center rounded-[50%]`} to={'/cuisine/Thai'}>
            <GiNoodles className='bg-transparent'/>
            <h4 className=' bg-transparent hidden md:block'>Thai</h4>
        </NavLink>
    </div>
  )
}

export default Category