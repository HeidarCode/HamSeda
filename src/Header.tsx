import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/70 shadow-md z-50 rtl">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">

<button   className="
            px-5 py-2 rounded-xl 
            bg-[#6c3dbf] text-white font-semibold 
            hover:bg-[#562ca5] transition
          ">ثبت سفارش</button>
       
        <Link
          to="/Auth"
          className="
            px-5 py-2 rounded-xl 
            bg-[#6c3dbf] text-white font-semibold 
            hover:bg-[#562ca5] transition
          "
        >
          ورود
        </Link>

      </div>
    </header>
  );
};

export default Header;
