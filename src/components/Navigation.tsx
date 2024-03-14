import { Link } from "react-router-dom";
import Container from "./Container";

export default function Navigation() {
  return (
    <div className="flex justify-center w-full bg-gray-100 px-8 py-4">
      <Container className=" ">
        <div className="flex w-full  items-center justify-between">
          <Link
            to="/"
            className="text-lime-700 font-bold"
          >
            Online Shop
          </Link>

          <div className="flex items-center gap-4 ">
            <Link
              className="px-4 py-2 border-2 border-lime-700 text-lime-700 rounded-xl text-sm hover:bg-lime-800 hover:text-white duration-150 ease-in-out transition-colors"
              to="/product-form"
            >
              New Product
            </Link>
            <Link
              className="px-4 py-2 border-2 border-lime-700 text-lime-700 rounded-xl text-sm hover:bg-lime-800 hover:text-white duration-150 ease-in-out transition-colors"
              to="/cart"
            >
              Shopping Cart
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
