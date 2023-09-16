import "./App.css";
import Header from "./components/header/Header";
import Cards from "./components/Cards/Cards";
import CartDetails from "./components/CourseCartDetails/CartDetails";
import { useState } from "react";
//
import Swal from "sweetalert2";

function App() {
  const [cartDetails, setCartDetails] = useState([]);
  const [cartCredit, setCartCredit] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartHour, setCartHour] = useState(20);

  const handleAddToCartDetails = (id, card, credit) => {
    const newCartDetails = [...cartDetails, card];
    const cartIDV = newCartDetails.map((cartDetail) => cartDetail.id);
    const countDuplicate = cartIDV.filter((dulpct) => dulpct === id).length;
    if (countDuplicate < 2) {
      const tempCartCredit = cartCredit + credit;
      if (tempCartCredit <= 20) {
        setCartDetails(newCartDetails);
      } else {
      }
    } else {
      Swal.fire("Sorry!! Already added it.Add another One.");
    }
  };

  const handleCredit = (id, credit) => {
    const cartIDV = cartDetails.map((cartDetail) => cartDetail.id);
    const countDuplicate = cartIDV.filter((dulpct) => dulpct === id).length;
    if (countDuplicate === 0) {
      const tempCartCredit = cartCredit + credit;
      if (tempCartCredit <= 20) {
        const newCartCredit = cartCredit + credit;
        setCartCredit(newCartCredit);
        const newCartHour = 20 - newCartCredit;
        setCartHour(newCartHour);
      } else {
        Swal.fire(
          `Sorry!! you have already ${cartCredit}hr & only ${cartHour}hr left !!`
        );
      }
    } else {
    }
  };

  const handlePrice = (id, price, credit) => {
    const cartIDV = cartDetails.map((cartDetail) => cartDetail.id);
    const countDuplicate = cartIDV.filter((dulpct) => dulpct === id).length;
    if (countDuplicate === 0) {
      const tempCartCredit = cartCredit + credit;
      if (tempCartCredit <= 20) {
        const newCartPrice = cartPrice + price;
        setCartPrice(newCartPrice);
      }
    }
  };

  return (
    <>
      <div className="bg-white h-full">
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
