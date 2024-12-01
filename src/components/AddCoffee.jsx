import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      details,
      category,
      photo,
    };

    console.log(newCoffee);
    //send the data to server side
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json()) // Removed the misplaced semicolon
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#f4f3f06c] p-24">
      <h1 className="text-3xl text-purple-600 font-extrabold">
        Hey Add Coffee
      </h1>
      <form onSubmit={handleCoffee}>
        {/* form name and quantity row */}
        <div className="flex gap-2">
          <div className="form-control md:w-1/2">
            <label className="label mx-auto">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="">
              <input
                name="name"
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label mx-auto">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="flex gap-2">
          <div className="form-control md:w-1/2">
            <label className="label mx-auto">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="">
              <input
                name="supplier"
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label mx-auto">
              <span className="label-text">Taste</span>
            </label>
            <label className="">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* category and details row */}
        <div className="flex gap-2">
          <div className="form-control md:w-1/2">
            <label className="label mx-auto">
              <span className="label-text">Category</span>
            </label>
            <label className="">
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label mx-auto">
              <span className="label-text">Details</span>
            </label>
            <label className="">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="">
          <div className="form-control w-full">
            <label className="label mx-auto">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="">
              <input
                name="photo"
                type="text"
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input className="btn btn-block" type="submit" value="Add coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
