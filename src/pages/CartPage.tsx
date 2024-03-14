import Container from "../components/Container";
import useCartStore from "../utils/useCartStore";

export default function CartPage() {
  const { val, total } = useCartStore();

  const tableHeaders = ["Product Name", "Unit Price", "Quantity", "Total"];
  console.log(val);
  return (
    <Container className="flex-col gap-8 py-10">
      <h1 className="text-2xl text-lime-800 font-bold">Cart Page</h1>
      <table className="w-full">
        <thead>
          {tableHeaders.map((eachHeader) => (
            <th
              className="border-2 px-4 py-2"
              key={eachHeader}
            >
              {eachHeader}
            </th>
          ))}
        </thead>
        {val.map(({ title, price, quantity }) => (
          <tr key={title}>
            <td className="border-2 px-4 py-2 ">{title}</td>
            <td className="border-2 px-4 py-2 ">₱ {price}</td>
            <td className="border-2 px-4 py-2 ">{quantity}</td>
            <td className="border-2 px-4 py-2 ">₱ {quantity * price}</td>
          </tr>
        ))}
        <tr>
          <th
            colSpan={3}
            className="border-2 px-4 py-2 "
          >
            Total
          </th>
          <td className="border-2 px-4 py-2 text-lime-800 font-medium">
            ₱ {total()}
          </td>
        </tr>
      </table>
    </Container>
  );
}
