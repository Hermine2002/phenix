import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import About from "../components/Pages/About/About";
import Perspective from "../components/Pages/Perspective/Perspective";
import Curses from "../components/Pages/Curses/Curses";
import Coin from "../components/Pages/Coin/Coin";
import NotFound from "../components/NotFound/NotFound";
import Layout from "../components/Layout/Layout";

import WhatWeDo from "../components/Pages/WhatWeDo/WhatWeDo";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/perspective" element={<Perspective />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/curses" element={<Curses />} />
        <Route path="/coin" element={<Coin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
