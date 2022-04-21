import Cart from "../../../components/cart/cart";
import MenuCard from "../../../components/menuCards/menu";
import "./restaurant.css";
import { useEffect, useState } from "react";

const data = [
  {
    category: "halal",
    items: [
      {
        name: "kebab",
        price: "10$",
        desc: "the tastiest in the world!",
        img: "https://i.imgur.com/Y2SjBdR.jpeg",
      },
      {
        name: "shwarma",
        price: "20$",
        desc: "the tastiest in the world!",
        img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "roti",
        price: "15$",
        desc: "the tastiest in the world!",
        img: "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "msala",
        price: "30$",
        desc: "the tastiest in the world!",
        img: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
  },
  {
    category: "aisan",
    items: [
      {
        name: "korma",
        price: "10$",
        desc: "the tastiest in the world!",
        img: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "sushi",
        price: "12$",
        desc: "the tastiest in the world!",
        img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "biryani",
        price: "40$",
        desc: "the tastiest in the world!",
        img: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "tuna",
        price: "70$",
        desc: "the tastiest in the world!",
        img: "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
  },
];

export default function Restaurant() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [setCart]);

  function addToCart(item) {
    const cartItem = {
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    //array of our food items
    var tempCart = cart;
    var check = false;
    for (let i = 0; i < tempCart.length; i++) {
      if (cartItem.name === tempCart[i].name) {
        tempCart[i].quantity += 1;
        check = true;
      }
    }
    if (check === false) {
      tempCart.push(cartItem);
    }
    setCart(tempCart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className="menuMain row container-fluid">
      <div className="menu col-md-9">
        <div className="bannerDiv"></div>
        <div className="menuHeading">
          <h1>Title</h1>
        </div>
        <div className="menuContent">
          <h1>Menu</h1>
          <div>
            {data.map((item, i) => {
              return (
                <div className="menuCategory" key={i}>
                  <h3>{item.category}</h3>
                  <div className="row">
                    {item.items.map((menuItem, j) => {
                      return (
                        <div
                          className="col-md-3 col-sm-6 col-12"
                          key={j}
                          onClick={() => {
                            addToCart(menuItem);
                          }}
                        >
                          <MenuCard
                            name={menuItem.name}
                            image={menuItem.img}
                            desc={menuItem.desc}
                            price={menuItem.price}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="cart col-md-3 ">
        <Cart />
      </div>
    </div>
  );
}
