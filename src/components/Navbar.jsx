// import logo from "./assets/z-logo-default.svg";
// import download from "./assets/download.svg";
// import "./css/Navbar.css";
// const Navbar = () => {
//   var rightNavItems = [
//     { name: "Buy", link: "#" },
//     { name: "Rent", link: "#" },
//     { name: "Sell", link: "#" },
//     { name: "Home Loans", link: "#" },
//     { name: "Agent Finder", link: "#" },
//   ];
//   var leftNavItems = [
//     { name: "Manage Rentals", link: "#" },
//     { name: "Advertise", link: "#" },
//     { name: "Help", link: "#" },
//   ];
//   return (
//     <div className="root">
//       <ul className="r-items">
//         {rightNavItems.map((item) => (
//           <p>{item.name}</p>
//         ))}
//       </ul>

//       <img src={logo} alt="" className="logo" />

//       <ul className="l-items">
//         {leftNavItems.map((item,index) => (
//           <a key={index} href={item[link]}>
//             <p>{item.name}</p>
//           </a>
//         ))}
//         <img src={download} alt="" className="pic" />
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import logo from "./assets/z-logo-default.svg";
import download from "./assets/download.svg";
import menu from "./assets/menu.svg";
import Default from "./Default";

import "./css/Navbar.css";

const Navbar = () => {
  var rightNavItems = [
    { name: "Buy", link: "#" },
    { name: "Rent", link: "#" },
    { name: "Sell", link: "#" },
    { name: "Home Loans", link: "#" },
    { name: "Agent Finder", link: "#" },
  ];

  var leftNavItems = [
    { name: "Manage Rentals", link: "#" },
    { name: "Advertise", link: "#" },
    { name: "Help", link: "#" },
  ];

  return (
    <>
      <div className="root">
        <ul className="r-items">
          {rightNavItems.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        <img src={menu} alt="" className="menu" />

        <img src={logo} alt="" className="logo" />

        <ul className="l-items">
          {leftNavItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                <p>{item.name}</p>
              </a>
            </li>
          ))}
        </ul>
        <img src={download} alt="" className="pic" />
      </div>
      <Default/>
    </>
  );
};

export default Navbar;
