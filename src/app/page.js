import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Home() {
  return (
    <>
      <header>
        <nav className="bg-[#0F1111] h-16 flex items-center text-white text-sm justify-evenly">
          <a
            href=""
            className="border border-transparent hover:border-white p-1"
          >
            <img src="assests/amazon_logo.png" alt="" className="w-24 h-9" />
          </a>

          <div className="border border-transparent hover:border-white p-1">
            <p className="text-xs">Deleiver to</p>
            <div className="flex items-center gap-1">
              <CiLocationOn />
              <p className="font-bold">India</p>
            </div>
          </div>

          <div className="flex h-12 p-1 text-black">
            <select
              name=""
              id=""
              className="rounded-md rounded-r-none bg-[#e6e6e6] px-2"
            >
              <option value="">All</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon"
              className="w-[780px] text-base pl-2"
            />
            <div className="bg-[#febd69] p-2 rounded-md rounded-l-none flex items-center text-xl">
              <FaSearch />
            </div>
          </div>

          <div className="flex border border-transparent hover:border-white p-1">
            <img src="assests\USFlag.png" alt="" className="h-4 w-5" />
            <select name="" id="" className="bg-transparent font-bold">
              <option value="">EN</option>
            </select>
          </div>

          <div className="border border-transparent hover:border-white p-1">
            <p className="pl-1 text-xs">Hello, sign in</p>
            <select name="" id="" className="bg-transparent font-bold">
              <option value="">Account & Lists</option>
            </select>
          </div>

          <div className="border border-transparent hover:border-white p-1">
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <div className="flex items-center border border-transparent hover:border-white p-1">
            <div className="text-4xl pb-1">
              <PiShoppingCartSimple />
            </div>
            <p className="font-bold pt-2">Cart</p>
          </div>
        </nav>

        <div className="flex items-center h-10 text-white bg-[#222F3D] pl-4">
          <div className="flex items-center gap-1 border border-transparent hover:border-white p-2">
            <GiHamburgerMenu className="text-xl"/>
            <p className="font-bold">All</p>
          </div>

          <ul className="flex items-center">
            <li>
              <select name="" id="" className="bg-transparent border border-transparent hover:border-white p-2">
                <option value="">Fresh</option>
              </select>
            </li>
          
          <li className="border border-transparent hover:border-white p-2">Best Sellers</li>
          <li className="border border-transparent hover:border-white p-2">New Releases</li>
          <li className="border border-transparent hover:border-white p-2">Today's Deals</li>
          <li>
            <select name="" id="" className="bg-transparent border border-transparent hover:border-white p-2">
              <option value="">Prime</option>
            </select>
          </li>
          <li className="border border-transparent hover:border-white p-2">Elextronics</li>
          <li className="border border-transparent hover:border-white p-2">Mobile Phones</li>
          </ul>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
