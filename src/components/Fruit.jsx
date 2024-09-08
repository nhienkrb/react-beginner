

export default function Fruit({name, price, emoji}) {
  return (
    <li className="text-blue-600/75 font-bold hover:text-red-600 cursor-pointer">
        {name} - { price} - { emoji}
    </li>
  );
}
