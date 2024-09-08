const name = "JohnSon Ngo";

function displayMessage() {
  return "Wow!~~~~~~~~~~~~~~~~";
}

function Hello(props) {
//   const { name, message } = props;
    const {person} = props;
  return (
    <div>
      <h1 className="text-xl ">
        Hello form a component Hello.jsx ! {person.name} | {person.message} | {person.seatNumbers} 
      </h1>
    </div>
  );
}

export default Hello;
