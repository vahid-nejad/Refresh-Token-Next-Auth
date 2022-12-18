import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-2 ">
      <Link className="text-sky-600 hover:text-sky-700" href={"/"}>
        Home
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href={"/admin"}>
        Admin
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href={"/admin/panel"}>
        Panel
      </Link>
    </div>
  );
};

export default AppBar;
