import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import useShopStore, { productItem } from "../utils/useShopStore";

export default function Home() {
  const { val, changeFilter } = useShopStore();
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  if (val.length === 0) {
    return (
      <Container className="flex-col gap-8 py-10">
        <h1 className="text-2xl text-lime-800 font-bold self-start">Store</h1>
        <p className="text-center text-gray-800 text-sm">
          There are no products yet...
        </p>
      </Container>
    );
  }

  return (
    <Container className="flex-col gap-8 py-10">
      <div className="flex w-full justify-between px-8">
        <h1 className="text-2xl text-lime-800 font-bold">Store</h1>
        <div className="flex">
          <button
            className="text-lime-800 font-medium"
            onClick={toggleDropDown}
          >
            filter
          </button>
          <div className="relative">
            {isDropdownOpen && (
              <div className="absolute top-10 right-0 shadow-md">
                <button
                  className="text-sm px-4 py-2"
                  onClick={() => changeFilter("title")}
                >
                  Name
                </button>
                <button
                  className="text-sm px-4 py-2"
                  onClick={() => changeFilter("price")}
                >
                  {" "}
                  Price
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {val.map((eachVal) => (
          <ProductCard
            key={eachVal.title}
            {...eachVal}
          />
        ))}
      </div>
    </Container>
  );
}

function ProductCard({ title, price, picture }: productItem) {
  return (
    <Link
      to={`/product/${title}`}
      className="flex flex-col shadow-lg overflow-hidden rounded-3xl"
    >
      <img
        className="aspect-square object-cover object-center w-full"
        src={
          picture ||
          "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
        }
        alt=""
      />
      <div className="flex flex-col py-2 px-4">
        <h2>{title}</h2>
        <span>₱ {price}</span>
      </div>
    </Link>
  );
}
