import { AiFillEdit, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Logo from "./Logo";
import { RiArrowDropDownLine, RiCloseLine, RiEyeCloseLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import MenuLogo from "../assets/images/menu_logo.png";

function Menubar() {
  return (
    <div className="flex  items-center bg-custom_blue p-6">
      <div>
        <img src={MenuLogo} alt="" width={40} />
      </div>
      <div className="lg:invisible">
        <AiOutlineMenu size={50} />
      </div>
      <div className="sideMenu left-0 top-0 mx-0 w-52 lg:invisible absolute bg-cyan-100 text-left h-fit px-4">
        <div className="flex flex-col gap-4 my-5">
          <div className="flex justify-end mx-4">
            <RiCloseLine/>
          </div>
          <div>
            <a href="">Homepage</a>
          </div>
          <div>
            <a href="">About</a>
          </div>
          <div className="flex my-3 items-center">
            <a href="">Categories</a>
            <RiArrowDropDownLine />
          </div>
          <div className="flex items-center">
            <a href="">Pages</a>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="my-4">
          <Logo />
        </div>
        <div className=" flex flex-col gap-5 my-5">
          <div>
            <AiOutlineSearch />
          </div>
          <div>
            <FaEdit />
          </div>
          <div>Contact</div>
          <div className="flex items-center">
            <p>En</p>
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 invisible lg:visible">
        <div>
          <a href="">Homepage</a>
        </div>
        <div>
          <a href="">About</a>
        </div>
        <div className="flex m-3 items-center">
          <a href="">Categories</a>
          <RiArrowDropDownLine />
        </div>
        <div className="flex items-center">
          <a href="">Pages</a>
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className="mx-2 invisible lg:visible">
        <Logo />
      </div>
      <div className="flex gap-5 items-center invisible lg:visible">
        <div>
          <AiOutlineSearch />
        </div>
        <div>
          <FaEdit />
        </div>
        <div>Contact</div>
        <div className="flex items-center">
          <p>En</p>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
}

export default Menubar;
