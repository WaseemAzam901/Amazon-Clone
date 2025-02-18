import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrLanguage } from "react-icons/gr";
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
            <GiHamburgerMenu className="text-xl" />
            <p className="font-bold">All</p>
          </div>

          <ul className="flex items-center">
            <li>
              <select
                name=""
                id=""
                className="bg-transparent border border-transparent hover:border-white p-2"
              >
                <option value="">Fresh</option>
              </select>
            </li>

            <li className="border border-transparent hover:border-white p-2">
              Best Sellers
            </li>
            <li className="border border-transparent hover:border-white p-2">
              New Releases
            </li>
            <li className="border border-transparent hover:border-white p-2">
              Today's Deals
            </li>
            <li>
              <select
                name=""
                id=""
                className="bg-transparent border border-transparent hover:border-white p-2"
              >
                <option value="">Prime</option>
              </select>
            </li>
            <li className="border border-transparent hover:border-white p-2">
              Elextronics
            </li>
            <li className="border border-transparent hover:border-white p-2">
              Mobile Phones
            </li>
          </ul>
        </div>
      </header>

      <main className="bg-[#E6E6E6] pb-5">
        <div className="bg-[url('/assests/banner.jpg')] h-80 bg-cover flex items-end justify-center text-sm">
          <p className="bg-white h-10 flex items-center justify-center w-[1460px] mb-6">
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery.&nbsp;
            <a className="text-[#007185] hover:underline hover:text-orange-500">
              Click here to go to amazon.in{" "}
            </a>
          </p>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-4 px-4">
          {/* bus checking k liye kiya tha k check karu k hum grid say kesay 2 rows aur 2 columns bana saktay hain */}
          <div className="bg-white p-4">
            <p className="text-xl font-bold">Shop School Essenstials</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 px-4 py-4">
              <div>
                <a href="">
                  <img src="/assests/1.jpg" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="/assests/5.jpg" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="/assests/6.jpg" alt="" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="/assests/7.jpg" alt="" />
                </a>
              </div>
            </div>
            <a href="" className="text-[#007185] text-xs hover:text-orange-500">
              See more
            </a>
          </div>

          <div className="bg-white p-4">
            <p className="text-xl font-bold">Home & Kitchen Under $30</p>
            <img src="/assests/2.jpg" alt="" className="my-3" />
            <a href="" className="text-xs text-[#007185] hover:text-orange-500">
              Shop now
            </a>
          </div>

          <div className="bg-white p-4">
            <p className="font-bold text-xl">Health & Personal Care</p>
            <img src="/assests/3.jpg" alt="" className="my-3" />
            <a href="" className="text-xs hover:text-orange-500 text-[#007185]">
              Shop now
            </a>
          </div>

          <div className="bg-white p-4">
            <p className="text-xl font-bold">Beauty Picks</p>
            <img src="/assests/4.jpg" alt="" className="my-3" />
            <a href="" className="text-xs hover:text-orange-500 text-[#007185]">
              Shop now
            </a>
          </div>

          <div className="bg-white p-4">
            <p className="text-xl font-bold">Electronics</p>
            <img src="/assests/5.jpg" alt="" className="my-3" />
            <a href="" className="text-xs hover:text-orange-500 text-[#007185]">
              Shop now
            </a>
          </div>

          <div className="bg-white p-4">
            <p className="text-xl font-bold">Toys under $30</p>
            <img src="/assests/6.jpg" alt="" className="my-3" />
            <a href="" className="text-xs hover:text-orange-500 text-[#007185]">
              Shop now
            </a>
          </div>

          <div className="bg-white p-4">
            <p className="text-xl font-bold">For your Fitness Needs</p>
            <img src="/assests/7.jpg" alt="" className="my-3" />
            <a href="" className="text-xs hover:text-orange-500 text-[#007185]">
              Shop now
            </a>
          </div>

          <div className="bg-white p-4">
            <p className="font-bold text-xl">Discover Fashion Trends</p>
            <img src="/assests/8.jpg" alt="" className="my-3" />
            <a href="" className="text-xs hover:text-orange-500 text-[#007185]">
              Shop now
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-[#37475A] hover:bg-[#3b4d63] text-white h-12 text-sm flex items-center justify-center">
          <p>Back to top</p>
        </div>

        <div className="bg-[#232F3E] h-[430px]">
          <div className=" text-sm text-[#DDDDDD] flex justify-evenly py-10">
            <ul className="space-y-2.5">
              <li className="text-white font-bold text-base ">
                <a href="">Get to Know Us</a>
              </li>
              <li className="hover:underline">
                <a href="">About Amazon</a>
              </li>
              <li className="hover:underline">
                <a href="">Careers</a>
              </li>
              <li className="hover:underline">
                <a href="">Amazon Science</a>
              </li>
            </ul>

            <ul className="space-y-2.5">
              <li className="text-white font-bold text-base">Shop with Us</li>
              <li className="hover:underline">
                <a href="">Your Account</a>
              </li>
              <li className="hover:underline">
                <a href="">Your Orders</a>
              </li>
              <li className="hover:underline">
                <a href="">Your Addresses</a>
              </li>
              <li className="hover:underline">
                <a href="">Your Lists</a>
              </li>
            </ul>

            <ul className="space-y-2.5">
              <li className="text-white font-bold text-base">
                Make Money with Us
              </li>
              <li className="hover:underline">
                <a href="">Protect and build your brand</a>
              </li>
              <li className="hover:underline">
                <a href="">Sell on Amazon</a>
              </li>
              <li className="hover:underline">
                <a href="">Fulfillment by Amazon</a>
              </li>
              <li className="hover:underline">
                <a href="">Become an Affiliate</a>
              </li>
              <li className="hover:underline">
                <a href="">Advertise Your Products</a>
              </li>
            </ul>

            <ul className="space-y-2.5">
              <li className="text-white font-bold text-base">
                Let Us Help You
              </li>
              <li className="hover:underline">
                <a href="">Help</a>
              </li>
              <li className="hover:underline">
                <a href="">COVID-19 and Amazon</a>
              </li>
              <li className="hover:underline">
                <a href="">Shipping & Delivery</a>
              </li>
              <li className="hover:underline">
                <a href="">Returns & Replacements</a>
              </li>
              <li className="hover:underline">
                <a href="">Recalls and Product Safety Alerts</a>
              </li>
              <li className="hover:underline">
                <a href="">Returns & Replacements</a>
              </li>
              <li className="hover:underline">
                <a href="">Amazon App Download</a>
              </li>
            </ul>
          </div>

          <hr className="border-[#545050]"/>

          <div className="flex justify-center items-center py-6 gap-20 text-xs">
            <img src="/assests/amazon_logo.png" alt="" className="w-20 h-7 mt-4" />
            <div className="flex gap-2 text-[#DDDDDD]">
              <div className="flex items-center text-white border border-[#DDDDDD] p-2 px-3 rounded-sm">
                <GrLanguage/>
                <select name="" id="" className="bg-transparent ml-1">
                  <option value="">English</option>
                </select>
              </div>

              <div className="flex items-center border p-2 px-5 rounded-sm border-[#DDDDDD]">
                <img src="/assests/USFlag.png" alt="" className="h-4 w-5 mr-4" />
                <p className="">United States Of America</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
