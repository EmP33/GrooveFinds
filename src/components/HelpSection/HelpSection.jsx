import React from "react";

import { Outlet } from "react-router-dom";

const HelpSection = () => {
  return (
    <>
      <Outlet />
      <h1>Centrum Pomocy</h1>
    </>
  );
};

export default HelpSection;
