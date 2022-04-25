import MenuCard from "../../../components/menuCards/menu";
import { useState } from "react";
import "./menu.css";
import EditMenuBanner from "../../../components/editMenuModal/editMenuBanner";
import AddCat from "../../../components/addCategoryModal/addCat.js";
import image from "../../../assets/burger.jpg";
import AddDish from "../../../components/addDishes/addDishes";


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
    category: "asian",
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
      }
    ],
  },
];

export default function RestaurantMenu() {

  //this is for banner
  const [show, setShow] = useState(false);
  const modalShow = () => {
    setShow(!show);
  };
  const [banner, setBanner] = useState(image);
  const changeBanner = (image) => {
    setBanner(image);
  };
  //this is for category
  const [showAddCat, setShowAddCat] = useState(false);
  const modalCatShow = () => {
    setShowAddCat(!showAddCat);
  };
  const [menuData, setMenuData] = useState(data);
  const addCategory = (cat) => {
    let temp = menuData;
    temp.push({
      category: cat,
      items: []
    });
    setMenuData(temp);

  }
  //this is for menu card
  const [showAddDish, setShowAddDish] = useState(false);
  const modalDishShow = () => {
    setShowAddDish(!showAddDish);
  };
  const addDish = (cat, dish) => {
    for (let i = 0; i < menuData.length; i++) {
      if (menuData[i].category === cat) {
        //temporary copy of the items array
        var tempArray = menuData[i].items;
        //push new dish inside temporary array
        tempArray.push(dish);
        // make a temporary copy of the ith object
        var tempOject = menuData[i];
        //replace the old items array inside with the new temp array
        tempOject.items = tempArray;
        //take the whole menu data array and make its copy
        var tempSuper = menuData;
        //replace the ith object in the copy with the new ith object
        tempSuper[i] = tempOject;
        //set the menu data with the new data of the temporary variables
        setMenuData(tempSuper);
      }
    }
  }
  return (
    <>
      {show ? (
        <EditMenuBanner
          show={show}
          modalShow={modalShow}
          changeBanner={changeBanner}
          image={banner}
        />
      ) : (
        <></>
      )}
      {showAddCat ? (
        <AddCat
          show={showAddCat}
          modalShow={modalCatShow}
          addCategory={addCategory}
        />
      ) : (
        <></>
      )}
      {showAddDish ? (
        <AddDish
          show={showAddDish}
          modalShow={modalDishShow}
          addDish={addDish}
        />
      ) : (
        <></>
      )}

      <div className="menuMain row container-fluid">
        <div className="menu col-md-12">
          <div
            className="bannerDiv"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          ></div>
          <div className="menuHeading">
            <h1>Restaurant Menu</h1>
          </div>
          <div className="editMenuControls row ">
            <h3 className="col-md-3">Editting Options: </h3>
            <div className="col-md-9 d-flex justify-content-around menuEditingButtons">
              <button
                className="btn"
                onClick={() => {
                  modalShow();
                }}
              >
                Edit Banner
              </button>
              <button
                className="btn"
                onClick={() => {
                  modalCatShow();
                }}
              >
                Add Category
              </button>
              <button
                className="btn"
                onClick={() => {
                  modalDishShow();
                }}
              >
                Add Dishes
              </button>
            </div>
          </div>
          <div className="menuContent">
            <h1>Your Menu</h1>
            <div>
              {menuData.map((item, i) => {
                return (
                  <div className="menuCategory" key={i}>
                    <h3>{item.category}</h3>
                    <div className="row">
                      {item.items.map((menuItem, j) => {
                        return (
                          <div className="col-md-3 col-sm-6 col-12" key={j}>
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
      </div>
    </>
  );
}
