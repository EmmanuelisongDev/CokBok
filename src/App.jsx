import { Pages } from "./pages";
import { Category, Search } from "./components";
// import {FaBowlFood} from "react-icons/fa"
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="  bg-black h-full text-white">
        <Link to={"/"}>
          <h1 className="font-black text-xl m-[3rem]">CokBok.</h1>
          {/* <FaBowlFood  className=" bg-transparent bg-white"/> */}
        </Link>
        <Search />
        <Category />
        <Pages />
        <footer className=" text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 CokBok. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
