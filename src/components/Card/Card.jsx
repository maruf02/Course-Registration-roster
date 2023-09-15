import PropTypes from "prop-types";
import dollar from "../../assets/dollar.png";
import creditt from "../../assets/Frame.png";

const Card = ({ card, handleAddToCartDetails, handleCredit, handlePrice }) => {
  //   console.log(card);
  const { courseName, coverImg, courseDesc, price, credit } = card;
  return (
    <div>
      <div className="card card-compact w-11/12 bg-white shadow-xl">
        <figure>
          <img src={coverImg} alt="Course Image {courseName}" />
        </figure>
        <div className="card-body ">
          <h2 className="text-black text-lg font-bold">{courseName}</h2>
          <p className="text-black text-sm">{courseDesc}</p>
          <div className="flex gap-6 pt-4">
            <div className="flex gap-1">
              <img src={dollar} alt="" />
              <p className="text-black text-base"> Price: {price}</p>
            </div>
            <div className="flex gap-1">
              <img src={creditt} alt="" />
              <p className="text-black text-base"> Credit: {credit}hr</p>
            </div>
          </div>
          <div className="card-actions mt-5 ">
            <button
              onClick={() => {
                handleAddToCartDetails(card);
                handleCredit(credit);
                handlePrice(price);
              }}
              className="btn btn-primary w-64 h-10 "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleAddToCartDetails: PropTypes.func,
};

export default Card;
