import Card from "./Card";
function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h1 className="heading">Plan with Love</h1>
      </div>

      <div className="tour-cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
