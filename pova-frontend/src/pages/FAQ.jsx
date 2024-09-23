import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";

function FAQPage() {
  return (
    <div>
      <div>
        <Menubar />
      </div>
      <div>
        <div>
          <div className="bg-orange_primary p-2 text-white text-2xl font-semibold">
            <p>Frequently Asked Questions</p>
          </div>
        </div>
        <div></div>
        <div>
          <p>Can't Find An Answer To Your Question?</p>
          <div className="flex items-center my-6 w-fit border-orange_primary border-2 rounded-md py-2 px-5 text-orange_primary">
            <span className="ml-2">Contact Us</span> <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="general-footer">
        <Footer />
      </div>
    </div>
  );
}

export default FAQPage;
