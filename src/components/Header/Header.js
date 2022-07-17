// import React, { useState, useEffect } from "react";
// import "./Header.css";
// import { CSSTransition } from "react-transition-group";
// import { FaBars } from 'react-icons/fa';

// export default function Header() {
//   const [isNavVisible, setNavVisibility] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 700px)");
//     mediaQuery.addListener(handleMediaQueryChange);
//     handleMediaQueryChange(mediaQuery);

//     return () => {
//       mediaQuery.removeListener(handleMediaQueryChange);
//     };
//   }, []);

//   const handleMediaQueryChange = mediaQuery => {
//     if (mediaQuery.matches) {
//       setIsSmallScreen(true);
//     } else {
//       setIsSmallScreen(false);
//     }
//   };

//   const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };

//   return (
//     <header className="Header">
//       <img src={require("../duck.png")} className="Logo" alt="logo" />
//       <CSSTransition
//         in={!isSmallScreen || isNavVisible}
//         timeout={350}
//         classNames="NavAnimation"   
//         unmountOnExit
//       >
//         <nav className="Nav">
//           <a href="/">Home</a>
//           <a href="/">Articles</a>
//           <a href="/">About</a>
//           <button>Logout</button>
//         </nav>
//       </CSSTransition>
//       <button onClick={toggleNav} className="Burger">
//         <img src='./menu-icon.png' alt='menu-icon'></img>
//       </button>
//     </header>
//   );
// }