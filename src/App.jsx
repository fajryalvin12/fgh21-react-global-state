import { React } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { listData } from "./redux/reducers/doFetch.js";
import { store } from "./redux/store.js";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";

function FetchData() {
  const linkData = "https://jsonplaceholder.typicode.com/users";
  const dispatch = useDispatch();
  const bigData = useSelector((state) => state.doFetch.mainData);

  async function restAPI() {
    const rawData = await fetch(linkData);
    const realData = await rawData.json();
    dispatch(listData(realData));
  }

  return (
    <div className="flex flex-col">
      <button onClick={restAPI} className="bg-slate-600 h-16">
        Add Data
      </button>
      <table className="flex flex-col justify-center h-screen items-center  ">
        <thead className="bg-blue-600 text-white w-full">
          <tr>
            <th className="px-8 text-2xl">Name</th>
            <th className="px-8 text-2xl">Email</th>
            <th className="px-8 text-2xl">Edit</th>
            <th className="px-8 text-2xl">Delete</th>
          </tr>
        </thead>
        <tbody>
          {bigData.map((list) => {
            return (
              <tr className="items-center text-left">
                <td className="px-8 text-xl">{list.name}</td>
                <td className="px-8 text-xl">{list.email}</td>
                <td className="px-8 text-xl">
                  <button>
                    <FaPen />
                  </button>
                </td>
                <td className="px-8 text-xl">
                  <button>
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <FetchData />
    </Provider>
  );
}

export default App;
