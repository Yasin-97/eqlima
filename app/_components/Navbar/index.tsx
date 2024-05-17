import React from "react";
import logo from "../../_assets/logoGOLD.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="w-full flex justify-between gap-4">
        <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <Link href="https://eqlimagold.ir/" passHref>
            <Image
              src={logo}
              alt="user"
              className=" w-full h-full object-contain"
            />
          </Link>
        </div>

        <Link
          className="flex justify-center items-center bg-gray-500 px-8 font-semibold text-[16px] leading-[26px] text-white min-h-[52px] rounded-[10px]"
          href="https://eqlimagold.ir/"
          passHref
        >
          خروج
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
