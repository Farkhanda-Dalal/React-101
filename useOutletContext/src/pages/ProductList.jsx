import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const ProductList = () => {
  const navigate=useNavigate();
  const data = useOutletContext();
//   console.log(data);

  return (
    <div>
      <h2 className="text-purple-400 text-center mt-6 text-2xl font-semibold">
        View ProductList
      </h2>

      <div className="flex items-center justify-center min-h-screen">

        {data?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 items-center">
            {data.map((item) => (
              <div key={item.id} className="border border-purple-300 rounded-md p-4 shadow-md bg-white">

                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <img src={item.images?.[0]} alt="" className="w-xs" />
                  <h6>{item.price}</h6>

                  <div className="flex gap-2 justify-center">
                    <button onClick={() => { navigate(`/item/${item.id}`) } }>View Details</button>
                    <button>Add to Cart</button>
                  </div>

              </div>
            ))}
          </div>
        ) : (
          <h6>Loading...</h6>
        )}

      </div>
    </div>
  );
};

export default ProductList;
