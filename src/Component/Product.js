import React from "react";

const Product = () => {
  return (
    <div className="shadow rounded-xl p-4 w-full mt-4">
      <div className="flex justify-between capitalize mb-4">
        <h3 className="font-black">top products</h3>
        <select
          id=""
          className="text-sm text-gray-500 bg-transparent border-0 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option>May-June 2021</option>
          <option>June-July 2021</option>
          <option>July-Aug 2021</option>
        </select>
      </div>
      <div className="flex justify-between product">
        <div className="piechart"></div>

        <ul>
          <li>
            <h3 className="font-bold capitalize user  before:relative before:p-1 before:mr-2">
              Basic tees
            </h3>
            <span className="text-slate-400 ml-3">55%</span>
          </li>
          <li>
            <h3 className="font-bold capitalize pants  before:relative before:p-1 before:mr-2">
              custom short pants
            </h3>
            <span className="text-slate-400 ml-3">31%</span>
          </li>
          <li>
            <h3 className="font-bold capitalize guest before:relative before:p-1 before:mr-2">
              suber hoodies
            </h3>
            <span className="text-slate-400 ml-3">14%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
