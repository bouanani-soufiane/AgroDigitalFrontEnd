import Products from "../data/Products.js";
import { BsThreeDots } from "react-icons/bs";

export const Table = () => {
  return (
    <div className="mt-12 rounded-lg shadow px-7 py-5 w-full bg-white">
      <table className="w-full">
        <thead className="uppercase text-left text-sm">
          <tr className=" h-10">
            <th>Product code</th>
            <th>Item</th>
            <th>Type</th>
            <th>Change</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Sales</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Products.map(
            ({
              id,
              product_code,
              name,
              type,
              change,
              price,
              sold,
              sales,
              image,
            }) => {
              return (
                <tr key={id} className="border-t h-16 capitalize">
                  <td>{product_code}</td>
                  <td className=" gap-4 flex items-center">
                    <img
                      src={`${image}`}
                      alt="img"
                      className=" my-3  size-10 rounded-md"
                    />
                    {name}
                  </td>
                  <td>
                    <p className=" text-white w-fit text-sm p-1 rounded-md bg-red-400">
                      {type}
                    </p>
                  </td>
                  <td>{change}</td>
                  <td>{price}</td>
                  <td>{sold}</td>
                  <td>{sales}</td>
                  <td>
                    <BsThreeDots className=" text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
