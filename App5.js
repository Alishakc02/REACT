//import "./App.css";

// import About from "./pages/About";
// // import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// // import Product from "./pages/Product";
// // import ProductItem from "./pages/Product/ProductItem";

//import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Feature from "./pages/Home/Feature";
// import StoredData from "./pages/StoredData";
// import FormPage from "./pages/FormPage";
// import Guess from "./pages";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           {/* <Route path="feature" element={<Feature />} /> */}
//         </Route>
//         <Route path="/form" element={<About />} />
//         <Route path="/form" element={<FormPage />} />
//         <Route path="/stored-data" element={<StoredData />} />
//         {/* <Route path="/product" element={<Product />} />
//         <Route path="/product/:id" element={<ProductItem />} /> */}
//       </Routes>
//     </BrowserRouter>

//   );
// }

// export default App;
// import React from "react";
// import "./App.css";
// import Guess from "./pages/Guess";

// function App5() {
//   return (
//     <div className="App">
//       <Guess />
//     </div>
//   );
// }

// export default App5;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MultiplicationProject from "./pages/MultilpicationProject";
import { TableContext } from "./Helper/tableContext";
//import { TableContext } from "react";
import { useState } from "react";
function App5() {
  const [multiplicationValue, setMultiplicationValue] = useState(0);
  const [dynamicMultication, setDynamicMultiplicationValue] = useState(false);
  const [multiplicationDepth, setMultiplicationDepth] = useState(0);
  console.log(multiplicationValue);
  return (
    <TableContext.Provider
      value={{
        multiplicationValue,
        setMultiplicationValue,
        dynamicMultication,
        setDynamicMultiplicationValue,
        multiplicationDepth,
        setMultiplicationDepth,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultiplicationProject />}></Route>
        </Routes>
      </BrowserRouter>
    </TableContext.Provider>
  );
}
export default App5;
