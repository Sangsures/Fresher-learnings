import React from "react";
import Barchart from "../Barchart/Barchart";
import Doughout from "../Doughnut/Doughnut";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js";
import Pot from "../Pot/Pot";
import Dou from "../Dou/Dou";
import Du from "../Du/Du";
import Rt from "../Rt/Rt";

const MetricsDashboard = () => {
  return (
  <div>
      <div className="p-7 pt-1 pb-4 grid grid-cols-3 gap-4">
      <div className="col-span-1 flex justify-center  p-4 w-full bg-white rounded-lg shadow">
        <div className="flex items-center">
          <div className="flex justify-center gap-8">
             <div>  <img src="https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--brand-brands-and-logos-pack-icons-2673787.png" width={30} height={30} alt="" /></div>
            <div>|</div>
            <div className="text-end ">
              <span>Accounts : 2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex items-center justify-center p-4 bg-white rounded-lg shadow">
        <div className="flex items-center">
          <div>
            <div className="flex items-center">
          <div className="flex justify-center w-full gap-2">
             <div>  <img src="data:image/jpeg;base64,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" width={25} height={25} alt="" /></div>
            <div>|</div>
            <div className="">
              <span>Accounts : 2  </span>
            </div>
            <div className="">
              <span>Subscriptions : 2  </span>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 p-4 bg-white rounded-lg shadow flex justify-center ">
        <div>
        <div className="flex justify-center ">
          <div className="flex justify-center w-full gap-8">
             <div className="font-bold"><span>MONTHLY</span></div>
            <div>|</div>
            <div className="font-bold ">
              <span>rs.152k</span>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="col-span-1 p-4 bg-white rounded-lg shadow">
  <div className="flex justify-between items-center mb-4">
  </div>
  <div><Rt/></div>
</div>


      <div className="col-span-1 p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-lg">Idle Resources</p>
          <p className="font-bold text-2xl">15</p>
        </div>
        <div className="flex justify-around">
          <div className="flex ">
          <div><Dou/></div>
          <div><Du/></div>
          </div>
        </div>
      </div>

      <div className="col-span-1 p-4 bg-white rounded-lg shadow">
  <div className="flex justify-between items-center mb-4">
    <p className="font-semibold text-gr text-lg">Spend</p>
    <p className="font-bold text-lg">% Percentage</p>
  </div>
  <div className="flex justify-around items-center gap-5 mb-7">
    <div className="flex flex-col justify-center text-center">
      <p className="font-bold text-4xl">11%</p>
      <p className="text-gray-500">AWS</p>
    </div>
    <div className="flex flex-col justify-center text-center">
      <p className="font-bold text-4xl">5%</p>
      <p className="text-gray-500">Azure</p>
    </div>
  </div>
</div>



     
    </div>
    <div className="w-full pl-7 flex space-x-4">
      <div className="w-[64%] space-y-4">
        <div className="bg-white rounded-lg shadow p-4 h-[200px]">
          <div> <p className="text-left text-gray-600">Spend By Service</p></div>
          <div className=""><Doughout/></div>
        </div>
        <div className="bg-white rounded-lg shadow p-4  h-[400px]">
        <div> <p className="text-left text-gray-600">Spend Forecast</p></div>
        <div className="flex">
          <div><Barchart/></div>
          <div><Pot/></div>
        </div>
        </div> 
      </div>
      <div className="w-[32%]">
        <div className="bg-white rounded-lg shadow p-4 h-[615px]">
        <p className="font-semibold items-start text-left underline">Recent Activities</p>
        <p className="text-left">✓ Security scan  for account (386542126215754)
is completed</p>
        <p className="text-right text-gray-500">April 02,2024 13:20:50</p>
        <p className="text-left">✓ Security scan  for account (386542126215754)
is completed</p>
        <p className="text-right text-gray-500">April 01,2024 13:20:50</p>
        <p className="text-left">🛈 AWS CPU  Monitoring Usage is Over 90% for 
last 15 minute</p>
<p className="text-right text-gray-500">April 02,2024 13:20:50</p>
<p className="text-left">🛈 Security scan  for account (386542126215754)
is completed</p>
<p className="text-right text-gray-500">April 02,2024 13:20:50</p>
<p className="text-left">✓ Security scan  for account (386542126215754)
is completed</p>
<p className="text-right text-gray-500">April 02,2024 13:20:50</p>
        </div>
      </div>
    </div>

  </div>
  );
};

export default MetricsDashboard;
