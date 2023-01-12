import MenuItems from "./components/menuitems";
import MyNewComponent from "./components/MyNewComponent"
import LightSwitch from "./components/LightSwitch";
import PersonCard from "./components/PersonCard";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <MyNewComponent header={"Header Prop"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
      </MyNewComponent>

      <LightSwitch></LightSwitch> */}
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard firstName={"Millard"} lastName={"Filmore"} age={50} hairColor={"Brown"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
