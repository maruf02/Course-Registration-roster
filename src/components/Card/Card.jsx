import PropTypes from "prop-types";
import dollar from "../../assets/dollar.png";
import credit from "../../assets/Frame.png";

const Card = ({ card }) => {
  console.log(card);
  const { courseName } = card;
  return (
    <div>
      <h1>{courseName}</h1>
      <div className="card card-compact w-11/12 bg-white shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/vvkvYCy/Rectangle-2.png"
            alt="Course Image"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title ">{courseName}</h2>
          <p>
            Learn the fundamentals of programming with this introductory course.
          </p>
          <div className="flex gap-8 pt-4">
            <div className="flex gap-3">
              <img src={dollar} alt="" />
              <p> Price: 15000</p>
            </div>
            <div className="flex gap-3">
              <img src={credit} alt="" />
              <p> Credit: 1hr</p>
            </div>
          </div>
          <div className="card-actions mt-5 ">
            <button className="btn btn-primary w-64 h-10 ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
