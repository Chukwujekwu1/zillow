import "./css/default.css";
import search from "./assets/search.svg";
import photo from "./assets/GatedCarousel_Mobile12.jpg";
import buy_home_photo from "./assets/Buy_a_home.webp";
import sell_home_photo from "./assets/Sell_a_home.webp";
import rent_home_photo from "./assets/Rent_a_home.webp";
const Default = () => {
  var homes = [
    {
      img: buy_home_photo,
      header: "Buy a home",
      text: "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
      btnText: "Browse homes",
    },
    {
      img: sell_home_photo,
      header: "Sell a home",
      text: "No matter what path you take to sell your home, we can help you navigate a successful sale.",
      btnText: "See your options",
    },
    {
      img: rent_home_photo,
      header: "Rent a home",
      text: "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
      btnText: "Find rentals",
    },
  ];
  return (
    <>
      <header className="header">
        <h1 className="header-text">Agents. Tours. Loans. Homes.</h1>
        <div className="header-input-div">
          <input
            className="header-input"
            type="text"
            placeholder="Try Searching with home features & location"
          />
          <button className="header-search-btn">
            <img src={search} alt="" />
          </button>
        </div>
      </header>
      <div className="div1">
        <div className="div1-text-div">
          <h1 className="div1-headline">Recommendations underway</h1>
          <p className="div1-text">
            Search and save a few homes you like and we'll find recommendations
            for you.
          </p>
        </div>
        <img className="div1-photo" src={photo} alt="" />
      </div>
      <div className="div2">
        <div className="div2-semi">
          {homes.map((home) => {
            return (
              <div className="home-div">
                <img className="home-img" src={home.img} alt="" />
                <h2 className="home-header">{home.header}</h2>
                <p className="home-text">{home.text} </p>
                <button className="home-btn">{home.btnText}</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Default;
