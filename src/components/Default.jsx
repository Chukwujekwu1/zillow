import "./css/default.css";
import search from "./assets/search.svg";
import photo from './assets/GatedCarousel_Mobile12.jpg'
const Default = () => {
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
          <h1 className="div1-headline" >Recommendations underway</h1>
          <p className="div1-text">Search and save a few homes you like and we'll find recommendations for you.</p>
        </div>
        <img className="div1-photo" src={photo} alt="" />
      </div>
    </>
  );
};

export default Default;
