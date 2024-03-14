import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import useShopStore from "../utils/useShopStore";
import useCartStore from "../utils/useCartStore";

export default function ProductPage() {
  const { productName } = useParams();
  const { specificProduct } = useShopStore(productName);
  const { changeValue } = useCartStore();

  if (!specificProduct) {
    return (
      <div className="flex flex-col">
        <h1>No Products Found</h1>
      </div>
    );
  }

  const { title, picture, desc, price } = specificProduct;

  return (
    <Container className="flex flex-col max-w-5xl gap-6  mt-20">
      <div className="flex flex-col w-full md:flex-row gap-8">
        <img
          className="aspect-square object-cover object-center w-[24rem]"
          src={
            picture ||
            "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          }
          alt=""
        />
        <div className="flex flex-col gap-1 w-full">
          <h1 className="font-bold text-xl">{title}</h1>
          <span className="text-lime-800 text-lg mb-2 font-medium">
            ₱ {price}
          </span>
          <p className="">{desc}</p>
        </div>
      </div>
      <div className="flex justify-between md:justify-end w-full items-center gap-4">
        <Link
          className="w-full md:w-fit text-center px-4 py-2 border-2 border-lime-700 text-lime-700 rounded-xl text-sm hover:bg-lime-800 hover:text-white duration-150 ease-in-out transition-colors"
          to={`/product-form/${title}`}
        >
          Edit Product
        </Link>
        <button
          className="w-full md:w-fit  px-4 py-2 border-2 border-lime-700 text-lime-700 rounded-xl text-sm hover:bg-lime-800 hover:text-white duration-150 ease-in-out transition-colors"
          onClick={() => changeValue(title, price)}
        >
          Add to Cart
        </button>
      </div>
    </Container>
  );
}
