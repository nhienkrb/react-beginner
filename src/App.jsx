import ConditionalComponent from "./components/ConditionalComponent"
import Counter from "./components/Counter"
import Form from "./components/Form"
import Fruits from "./components/Fruits"
import Hello from "./components/Hello"
import Message from "./components/Message"

function App() {
 const person ={
  name: 'John',
  age: 21,
  message: 'Hi everyone',
  seatNumbers: [1,2,3,4,5]
 }
  return (
    <div className="App">
          <h1 className="text-[29px]">Hello world form file App.jsx</h1> <br />
          <Hello person={person}/>
          <h1></h1>
           <Fruits /> 
        <ConditionalComponent/>
        
        <hr className="my-[30px] "/>
        <Message/>

        <hr className="my-[30px] "/>
        <Counter/>

        <hr className="my-[30px] "/>
        <Form/>
    </div>
    
  )
}

export default App
