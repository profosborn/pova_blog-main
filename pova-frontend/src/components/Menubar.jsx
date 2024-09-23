import {
  AiFillEdit,
  AiOutlineArrowDown,
  AiOutlineSearch,
} from "react-icons/ai";
import Logo from "./Logo";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import MenuLogo from "../assets/images/menu_logo.png";

function Menubar() {
  return (
    <div className="flex gap-16 items-center bg-custom_blue p-6">
      <div>
        <img src={MenuLogo} alt="" width={40} />
      </div>
      <div className="flex items-center gap-8">
        <div>
          <a href="">
            Homepage
          </a>
        </div>
        <div>
          <a href="">
            About
          </a>
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
      <div className="mx-80">
        <Logo />
      </div>
      <div className="flex gap-5 items-center">
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
