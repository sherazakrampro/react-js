import "./App.css";
import Card from "./components/Card";

function App() {
  // let user = {
  //   name: "Sheraz Akram",
  //   location: "Pakistan",
  // };

  // let arr1 = [20, 30, 40, 50, 60];

  // we can pass objects and arrays as props.

  return (
    <>
      <h1 className="text-5xl font-bold mb-6">React + Vite + Tailwind</h1>
      <Card gadget="MacBook Pro" btnText="Read More" />
      <Card gadget="HP Laptop" btnText="Want More" />
      <Card gadget="Dell Laptop" btnText="Visit Here" />
    </>
  );
}

export default App;
