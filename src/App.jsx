import "./App.css";
import Header from "./components/header/Header";
import Cards from "./components/Cards/Cards";
import CartDetails from "./components/CourseCartDetails/CartDetails";
import { useState } from "react";

function App() {
  const [cartDetails, setCartDetails] = useState([]);
  const [cartCredit, setCartCredit] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartHour, setCartHour] = useState(20);

  const handleAddToCartDetails = (id, card) => {
    const newCartDetails = [...cartDetails, card];
    setCartDetails(newCartDetails);
    // console.log("hh", newCartDetails);
    // console.log("click id", id);
    const cartIDV = [];
    newCartDetails.map((cartDetail) => {
      const cartid = cartDetail.id;
      cartIDV.push(cartid);
    });
    // console.log("id array", cartIDV);
    // const exit
  };

  const handleCredit = (credit) => {
    const newCartCredit = cartCredit + credit;
    setCartCredit(newCartCredit);
    const newCartHour = cartHour - newCartCredit;
    setCartHour(newCartHour);
    // console.log("object", credit);
    // console.log("object", newCartCredit);
  };

  const handlePrice = (price) => {
    const newCartPrice = cartPrice + price;
    setCartPrice(newCartPrice);
    // console.log("object", price);
  };

  return (
    <>
      <div className="bg-white h-[3000px]">
        <div className="container mx-auto">
          <Header></Header>
          <hr className="w-11/12 mx-auto my-5" />
          <div className="flex flex-col lg:flex-row gap-6">
            <Cards
              handleAddToCartDetails={handleAddToCartDetails}
              handleCredit={handleCredit}
              handlePrice={handlePrice}
            ></Cards>
            <CartDetails
              cartDetails={cartDetails}
              cartCredit={cartCredit}
              cartPrice={cartPrice}
              cartHour={cartHour}
            ></CartDetails>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
