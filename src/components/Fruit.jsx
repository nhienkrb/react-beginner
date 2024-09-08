

export default function Fruit({name, price, emoji}) {
  return (
    <li className="text-blue-600/75 font-bold hover:text-red-500 cursor-pointer">
        {/* {name} - { price} - { emoji} */}

        {price >= 10 ?  `${name} - ${ price} - ${ emoji}`:""}
    </li>
  );
}
