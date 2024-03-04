import Products from "../data/Products.js";
import { BsThreeDots } from "react-icons/bs";

export const Table = () => {
  return (
    <div className="mt-12 overflow-x-auto rounded-lg shadow px-7 py-5 w-full bg-white dark:bg-[#2B2A2F]">
      <table className="w-full whitespace-nowrap dark:text-gray-300 table-auto text-sm">
        <thead className="uppercase text-left text-sm">
          <tr className=" h-10 dark:text-gray-500">
            <th>Product code</th>
            <th className=" md:px-0 px-14">Item</th>
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
                <tr
                  key={id}
                  className="border-t md:text-left text-center dark:border-[#35383B] dark:hover:bg-[#343338] h-16 capitalize"
                >
                  <td>{product_code}</td>
                  <td className=" md:px-0 px-16 gap-4 flex items-center">
                    <img
                      src={`${image}`}
                      alt="img"
                      className=" my-3  size-10 rounded-md"
                    />
                    {name}
                  </td>
                  <td>
                    <p className=" text-white w-fit text-sm p-1 rounded-md bg-red-400 dark:bg-[#35383B]">
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
