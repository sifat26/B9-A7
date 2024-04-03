import Frame from "../../assets/Frame.svg";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex text-slate-900 text-opacity-70 ">
          <ul className="menu menu-horizontal px-1 text-base ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="">
            <label className="input   items-center gap-2 rounded-3xl bg-slate-900 bg-opacity-5 hidden md:flex">
              <img src="../../../src/assets/search.svg" alt="" />
              <input type="text" className="grow" placeholder="Search" />
            </label>
          </div>
          <img src={Frame} alt="" className="rounded-3xl bg-[#0BE58A] p-2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
