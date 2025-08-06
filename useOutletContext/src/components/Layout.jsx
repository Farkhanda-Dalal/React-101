import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  //   console.log(pathname)

  const [error, setError]=useState("");
  const [data, setData]=useState("");

  const getProducts = async (pathname) => {
    if (pathname == "/") {
      try {
        const res = await fetch("https://dummyjson.com/products");

        // Wrong url for error checking
        // const res = await fetch("https://dummyjson.com/productISWRONG");
        if(!res.ok) throw new Error(`Error occured: ${res.status}`);

        // res.ok so setData
        const data = await res.json();
        setData(data.products);

      } catch (error) {
        setError(error?.message || "Something went wrong.");
      }
    }
  };

  useEffect(() => {
    getProducts(pathname)
  }, [pathname]);

  return (
    <div>
      <div className="w-full flex justify-between bg-violet-300 px-4 py-2 mb-7">
        <h1>Shopping Cart</h1>
        <button
          onClick={() => {
            navigate("/viewCart");
          }}
        >
          View Cart
        </button>

      </div>
      <div>
        {(error && <h4>{error}</h4>)}
      </div>
      <div>
        {/* Send data to children using context prop of Outlet */}
        <Outlet context={data}></Outlet>
      </div>
    </div>
  );
};

export default Layout;
