// import "./App.css";
// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import News from "./components/News";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
// export default class App extends Component {
//   render() {
//     return (
//       <div> 

//         <Routes>
//           <Navbar/>
//           <Route path="/" element={<News pageSize={6} country="in" category="general" />}/>
//            <Route path="/business" element={<News pageSize={6} country="in" category="business" />}/>
//            <Route path="/entertainment" element={<News pageSize={6} country="in" category="entertainment" />}/>
//            <Route path="/general" element={<News pageSize={6} country="in" category="general" />}/>
//            <Route path="/health"element={<News pageSize={6} country="in" category="health" />}/>
//            <Route path="/science"element={<News pageSize={6} country="in" category="science" />}/>
//            <Route path="/sports"element={<News pageSize={6} country="in" category="sports" />}/>
//            <Route path="/technology"element={<News pageSize={6} country="in" category="technology" />}/>
           
//         </Routes>
//       </div>
//     );
//   }
// }




import React from 'react'
import News from "./components/News";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  let pagesize=12;
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path="/"  exact element={<News key='general'tagcolor='bg-success' pageSize={pagesize} country="in" category="general" />}/>
          <Route path="/business" exact  element={<News key='business' pageSize={pagesize} country="in" category="business" />}/>
          <Route path="/entertainment" exact  element={<News key='entertainment' pageSize={pagesize} country="in" category="entertainment" />}/>
          <Route path="/general" exact  element={<News key='general' pageSize={pagesize} country="in" category="general" />}/>
          <Route path="/health" exact element={<News key='health' pageSize={pagesize} country="in" category="health" />}/>
          <Route path="/science" exact element={<News key='science' pageSize={pagesize} country="in" category="science" />}/>
          <Route path="/sports" exact element={<News key='sports' pageSize={pagesize} country="in" category="sports" />}/>
          <Route path="/technology" exact element={<News key='technology' pageSize={pagesize} country="in" category="technology" />}/>
          
       </Routes>

    </>
  )
}
