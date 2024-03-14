import { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import useShopStore from "../utils/useShopStore";

export default function ProductForm() {
  const { productName } = useParams();
  const { specificProduct, changeValue } = useShopStore(productName);

  const [title, setTitle] = useState(specificProduct?.title ?? "");
  const [desc, setDesc] = useState(specificProduct?.desc ?? "");
  const [price, setPrice] = useState(specificProduct?.price ?? 0);
  const [picture, setPicture] = useState(specificProduct?.picture ?? "");

  const initialValue = {
    title: "",
    desc: "",
    price: "",
  };
  const [error, setError] = useState(initialValue);

  const submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (title && desc && price) {
      changeValue(
        { title, desc, price, picture },
        specificProduct ? "update" : "add"
      );
      setError(initialValue);

      return;
    }

    setError((prev) => ({
      ...prev,
      title: !title ? "Title is missing" : "",
      desc: !desc ? "Description is missing" : "",
      price: !price ? "Price is missing" : "",
    }));
  };

  return (
    <Container className=" mt-20 mb-auto bg-gray-100 p-8 rounded-2xl flex-col max-w-xl gap-2">
      <h1 className="text-lg text-lime-800 font-bold">
        {specificProduct ? "Edit" : "New"} Product
      </h1>
      <form className="flex flex-col w-full gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Title</label>
          <input
            autoFocus
            className="border-2 border-black"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          {error.title && (
            <span className="text-red-500 text-xs font-medium">
              {error.title}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Description</label>
          <textarea
            className="border-2 border-black resize-none h-20"
            value={desc}
            onChange={(e) => setDesc(e.currentTarget.value)}
          />
          {error.desc && (
            <span className="text-red-500 text-xs font-medium">
              {error.desc}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Price</label>
          <input
            className="border-2 border-black"
            type="number"
            value={price ?? 0}
            onChange={(e) => setPrice(parseInt(e.currentTarget.value))}
          />
          {error.price && (
            <span className="text-red-500 text-xs font-medium">
              {error.price}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">Picture Link</label>
          <input
            className="border-2 border-black"
            type="text"
            value={picture}
            onChange={(e) => setPicture(e.currentTarget.value)}
          />
        </div>

        <button
          onClick={submit}
          className="px-8 py-2.5 text-center bg-lime-800 w-fit text-white rounded-xl self-end"
        >
          Submit
        </button>
      </form>
    </Container>
  );
}
