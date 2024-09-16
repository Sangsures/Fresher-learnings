import { Link } from "react-router-dom";

function Sidebar() {
  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      svg: (
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="square"
            stroke-width="2"
            d="M8 15h7.01v.01H15L8 15Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="square"
            stroke-width="2"
            d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="square"
            stroke-width="2"
            d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"
          />
        </svg>
      ),
    },
    {
      label: "Cloud Monitoring",
      value: "cloud-monitoring",
      svg: (
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.383 4.076a6.5 6.5 0 0 0-6.887 3.95A5 5 0 0 0 7 18h3v-4a2 2 0 0 1-1.414-3.414l2-2a2 2 0 0 1 2.828 0l2 2A2 2 0 0 1 14 14v4h4a4 4 0 0 0 .988-7.876 6.5 6.5 0 0 0-5.605-6.048Z" />
          <path d="M12.707 9.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414l.293-.293V19a1 1 0 1 0 2 0v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2Z" />
        </svg>
      ),
    },
    {
      label: "User Management",
      value: "user-management",
      svg: (
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm1 2h-2c-2.67 0-8 1.34-8 4v2h18v-2c0-2.66-5.33-4-8-4Z" />
          <path d="M9 12c0-2.21-1.79-4-4-4S1 9.79 1 12s1.79 4 4 4 4-1.79 4-4Zm1 2H8c-2.67 0-8 1.34-8 4v2h10v-2c0-1.04.3-2.03.82-2.87C10.28 14.38 10 13.22 10 12Z" />
        </svg>
      ),
    },
    {
      label: "Reports",
      value: "reports",
      svg: (
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: "Movielist",
      value: "Movielist",
      svg: (
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
</svg>

      ),
    },
    {
      label: "ToDolist",
      value: "Todolist",
      svg: (
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 1 0-18c1.052 0 2.062.18 3 .512M7 9.577l3.923 3.923 8.5-8.5M17 14v6m-3-3h6"/>
</svg>


      ),
    },
  ];

  return (
    <div className=" pl-5 pb-10">
  <div className="flex flex-col w-64 h-screen bg-[#7E80A4] text-white rounded-2xl">
      <div className="flex items-center justify-center py-6">
        <div className="w-10 h-10 bg-white rounded-full"></div>
        <span className="ml-2 text-xl font-bold">Cloud Mantri</span>
      </div>

      <div className="flex flex-col justify-between  px-4">
       


        <nav className="space-y-4">
        <div>
          {data.map((dt, index) => (
            <Link
              key={index}
              to={`/${dt.value}`}
              className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-[#6F72B3]"
            >
              {dt.svg}
              <span className="ml-3">{dt.label}</span>
            </Link>
          ))}
        </div>

          <div className="text-sm font-medium rounded-lg hover:bg-[#6F72B3] ">
          <Link to="/settings" className="flex items-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v8m4-4H8"
              ></path>
            </svg>
            <span className="ml-3">Settings</span>
          </Link>
        </div>
        </nav>

      
      </div>
    </div>
    </div>
  
  );
}

export default Sidebar;
