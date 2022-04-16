import CustomCard from "../../../components/card/card";
import "./allRestaurants.css";

export default function AllRestaurants() {
  //restauraunts information data
  const data = [
    {
      name: "Halal Restaurant",
      img: "img",
      description: "this restaurant serves halal food",
    },
    {
      name: "Fast food Restaurant",
      img: "image",
      description: "this restaurant serves fast food",
    },
    {
      name: "Dinner Restaurant",
      img: "image",
      description: "this restaurant serves dinner",
    },
    {
      name: "Dinner Restaurant",
      img: "image",
      description: "this restaurant serves dinner",
    },
    {
      name: "Dinner Restaurant",
      img: "image",
      description: "this restaurant serves dinner",
    },
  ];
  return (
    <div className="allRestaurantsMain">
      <h1>Available Restaurants near you </h1>
      <div className="allRestaurants row">
        {data.map((item) => {
          return (
            <div className="col-md-3 restaurantCard">
              <CustomCard
                title={item.name}
                img={item.img}
                desc={item.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
