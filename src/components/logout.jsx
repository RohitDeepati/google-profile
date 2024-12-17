import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile";
import { Link } from "react-router-dom";

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  if (!isAuthenticated) return null;

  return (
    <div>
      <Profile />

      <div className="flex" >
        <aside className="bg-gray-500 w-1/5 h-screen">
          <Link to="/gdrive"> <div className="text-lg text-white font-semibold p-4 border-b cursor-pointer hover:underline">GDrive</div></Link>
        </aside>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="bg-red-500 text-white py-1 px-2 rounded-md mx-auto h-max m-2">
          Log Out
        </button>
      </div>
    </div>
  );
};
