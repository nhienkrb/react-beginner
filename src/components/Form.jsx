import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(event){
    event.preventDefault();s
  }
  return (
    <div className="m-[30px] ">
      {name.firstName} - {name.lastName}
      <form action="">
        <input
          className="rounded border-2 border-black"
          value={name.firstName}
          type="text"
          name="user"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        ></input>

        <input
          className="rounded border-2 border-black"
          value={name.lastName}
          type="text"
          name="user"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>

        <button className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button" onClick={(e)=>handleSubmit(e)}>submit</button>
      </form>
    </div>
  );
}
