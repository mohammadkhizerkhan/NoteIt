import React from "react";
import {Outlet } from "react-router-dom";
import {NavBar,SideBar} from "./index";


function Home() {
  return (
    <div>
      <NavBar/>
      <div class="home-cont">
        <SideBar/>
        <main class="main-cont">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default Home;
