import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./Component/Header/Banner";
import Header from "./Component/Header/Header";
import Heading from "./Component/Heading";
import Item from "./Component/Item";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cook, setCook] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("food.json");
      const data = await res.json();
      setItems(data);
    };
    loadData();
  }, []);
  const handleItem = (itm) => {
    const isExist = cart.find((iem) => iem.recipe_id == itm.recipe_id);
    if (!isExist) {
      setCart([...cart, itm]);
      toast.success("Item Added Successfully");
    } else {
      toast.warning("Item already exists");
    }
    // console.log(itm);
    //  setCart([itm])
  };
  const handleMade = (id) => {
    handleDelete(id);
    handleCook(id);
  };
  const handleCook = (id) => {
    const cookItems = cart.filter((item) => item.recipe_id === id);
    const cookItem = [...cook, cookItems];
    setCook(cookItem);
  };
  const handleDelete = (id) => {
    const newCart = cart.filter((itm) => itm.recipe_id !== id);
    setCart(newCart);
    toast.info("Food Are Cooking Now");
  };
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Heading></Heading>
      <div className="lg:grid lg:grid-cols-12 flex flex-col gap-5">
        <div className="col-span-7">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {items.map((item) => (
              <Item
                key={item.recipe_id}
                item={item}
                handleItem={handleItem}
              ></Item>
            ))}
          </div>
        </div>
        <div className="col-span-5">
          <div className=" rounded-2xl border border-zinc-800 border-opacity-20 items-start p-6">
            <div>
              <h2 className="text-center mt-8 font-semibold text-2xl">
                Want to cook: {cart.length}
              </h2>
            </div>

            <hr className="my-4" />
            <table className="table-auto w-full text-center p-2">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th>State</th>
                </tr>
              </thead>
              <thead>
                {cart.map((it, index) => {
                  return (
                    <tr
                      key={index}
                      className="text-zinc-800  text-sm font-light "
                    >
                      <td>{index + 1}</td>
                      <td>{it.recipe_name}</td>
                      <td>{it.preparing_time}</td>
                      <td>{it.calories}</td>
                      <td>
                        <button
                          onClick={() => handleMade(it.recipe_id)}
                          className="btn btn-sm btn-success rounded-3xl bg-[#0BE58A] border-none my-2"
                        >
                          Preparing
                        </button>
                      </td>
                      <hr />
                    </tr>
                  );
                })}
              </thead>
            </table>
            <h2 className="text-center mt-8 font-semibold text-2xl">
              Currently cooking: {cook.length}
            </h2>
            <hr className="my-4" />
            <table className="table-auto w-full text-center p-2">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <thead>
                {cook.map((im, index) => {
                  console.log(im);
                  return (
                    <tr
                      key={index}
                      className="text-zinc-800  text-sm font-light my-2 "
                    >
                      <td>
                        <button className="my-2">{index + 1}</button>
                      </td>
                      <td>{im[0].recipe_name}</td>
                      <td>{im[0].preparing_time}</td>
                      <td>{im[0].calories}</td>

                      <hr />
                    </tr>
                  );
                })}
              </thead>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
