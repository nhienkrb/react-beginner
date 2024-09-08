import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["apple", "orange", "banana", "mango"];

  const fruits = [
    { name: "apple", price: 20, emoji: "🍏" },
    { name: "orange", price: 13, emoji: "🍊" },
    { name: "banana", price: 5, emoji: "🍌" },
    { name: "mango", price: 10, emoji: "🥭" },
  ];
  return (
    <div className="m-8">
      <ul>
        {fruits.map((item) => (
          <Fruit key={item.name} name={item.name} price={item.price}  emoji = {item.emoji}/>
        /* <li key={item.name}>
            {item.name} - {item.price} - {item.emoji}
          </li> 
        */
        ))}
      </ul>

      <ul></ul>
    </div>
  );
}
