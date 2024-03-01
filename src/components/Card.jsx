import { useState } from "react";
function Card({ id, name, image, info, price, removeTour }) {

  const [ReadMore, setReadMore] = useState(false);

  const description = ReadMore ? info : `${info.substring(0, 200)}...`;

  function ReadMoreHandler() {
    setReadMore(!ReadMore);
  }

  return (
    <div className="card">
      <img src={image} className="tour-image" />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>

          <h4 className="tour-city-name">{name}</h4>
        </div>

        <div className="description">
          {description}

          <span className="ReadMore" onClick={ReadMoreHandler}>
            {ReadMore ? `Show less` : "Read more"}
          </span>
        </div>

        <button className="btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
