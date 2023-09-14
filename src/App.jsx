import "./App.css";
import Header from "./components/header/Header";
import Cards from "./components/Cards/Cards";
import CartDetails from "./components/CourseCartDetails/CartDetails";

function App() {
  return (
    <>
      <div className="bg-white h-[3000px]">
        <div className="container mx-auto">
          <Header></Header>
          <hr className="w-11/12 mx-auto my-5" />
          <div className="flex flex-col lg:flex-row gap-6">
            <Cards></Cards>
            <CartDetails></CartDetails>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
