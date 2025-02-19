import { MdAccessTimeFilled } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaEye, FaTags } from "react-icons/fa";
import { AiOutlineCompress } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaMouse } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";

interface ProductCardProps {
  img: string;
  title: string;
  price: number;
  type: string;
  location: string;
  time: string;
}

export const ProductCard = ({
  img,
  title,
  price,
  type,
  location,
  time,
}: ProductCardProps) => {
  return (
    <div className="">
      <div className="bg-gray-chalk rounded-lg">
        <div className="w-full relative group">
          <div className="w-full overflow-hidden relative">
            <img
              className="group-hover:scale-110 duration-1000 rounded-t-lg w-full"
              src={img}
              alt={img}
            />
          </div>
          <div className="badge absolute top-0 bg-dark-blue py-3 px-2 mx-4 text-white">
            <FaClipboardCheck />
          </div>
          <div className="flex items-center absolute top-0 right-0 bg-red-600 px-2 m-4 rounded-sm">
            <p className="text-white">{type}</p>
          </div>
          <div className="hidden group-hover:flex duration-1000 w-full px-4 pb-4 absolute bottom-0 justify-between bg-gradient-to-t from-black">
            <div className="flex items-center">
              <FaEye className="flex items-center text-lime-400" />
              <p className="text-white">224</p>
            </div>
            <div className="flex items-center text-cyan-400">
              <FaMouse />
              <p className="text-white">224</p>
            </div>
            <div className="flex items-center text-yellow-400">
              <FaStar />
              <p className="text-white">224</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center border-b-[1px] border-gray-mercury text-gray-dark pb-4">
            <FaTags />
            <p className="ml-2">Automobiles / Private Car</p>
          </div>
          <p className="text-lg font-medium pt-4">{title}</p>
          <div className="flex items-center justify-between border-b-[1px] border-gray-mercury text-gray-dark py-4">
            <div className="flex items-center">
              <IoLocationSharp />
              <p className="ml-2">{location}</p>
            </div>
            <div className="flex items-center">
              <MdAccessTimeFilled />
              <p className="ml-2">{time} ago</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="font-bold">
              {price}$<span className="font-normal">/Fixed</span>
            </div>
            <div className="flex items-center text-gray-dark">
              <AiOutlineCompress />
              <FaRegHeart className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
