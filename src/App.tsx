import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductForm from "./pages/ProductForm";
import RootContainer from "./components/RootContainer";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootContainer />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/product-form",
          element: <ProductForm />,
        },
        {
          path: "/product-form/:productName",
          element: <ProductForm />,
        },
        {
          path: "/product/:productName",
          element: <ProductPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
