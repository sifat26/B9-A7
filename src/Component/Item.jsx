import time from "../assets/time.svg";
import calore from "../assets/calore.svg"
const Item = ({ item ,handleItem}) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;
  // console.log(handleItem);
  return (
    <div className="p-6 rounded-2xl border border-zinc-800 border-opacity-20 space-y-4">
      <img src={recipe_image} alt="" className="w-full lg:h-40 h-48 rounded-2xl" />
      <h3 className="text-zinc-800 text-xl font-semibold">{recipe_name}</h3>
      <p className="text-zinc-500 text-base font-normal">{short_description}</p>
      <hr />
      <h2>Ingredients: {ingredients.length}</h2>
      <ul className="text-zinc-500 text-base font-normal ml-6">
        {ingredients.slice(0, 3).map((ingredient, index) => (
          <li key={index} style={{ listStyleType: "disc" }}>
            {ingredient}
          </li>
        ))}
      </ul>
      <hr />
      <div className="flex gap-4 text-zinc-800 text-opacity-80 text-base">
        <div className="flex gap-2">
          <img src={time} alt="" />
          <p>{preparing_time}</p>
        </div>
        <div className="flex gap-2">
          <img src={calore} alt="" />
          <p>{calories}</p>
        </div>
      </div>
      <button onClick={(e)=>handleItem(item)} className="btn btn-success rounded-3xl bg-[#0BE58A] border-none">Want to Cook</button>
    </div>
  );
};

export default Item;
