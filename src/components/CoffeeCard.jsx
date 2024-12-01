/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={coffee.photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        {/* // eslint-disable-next-line react/prop-types */}
        <h2 className="card-title">Name:{coffee.name}</h2>
        <p>Quantity:{coffee.quantity}</p>
        <p>Supplier:{coffee.supplier}</p>
        <p>Taste:{coffee.taste}</p>
        <p>Details:{coffee.details}</p>
        <p>Category:{coffee.category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
