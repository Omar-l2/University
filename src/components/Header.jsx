import { Category } from "@syncfusion/ej2-react-charts";
import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className=" mb-10">
      <p className=" bg-purple-500 p-2 text-center text-white text-xl">
        {category}
      </p>
      <p className=" mt-5 mr-8 text-3xl text-right dark:text-white font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
