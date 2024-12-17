import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GoogleIcon } from "../assets/icons";
import { LogoutButton } from "./logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;

  }

  return (
    <div>
      <nav className="bg-[#4C5958] h-22">
        <div className="flex justify-between text-white">
          <div className="">
            <div className="p-4 flex gap-4 cursor-pointer">{GoogleIcon} <span className="pt-2">Google Profile</span></div>
          </div>
          <div className="flex flex-col p-2 ">
            {user?.picture && <img src={user.picture} alt={user?.name} className="w-3/4 h-3/4 rounded-full" />}
            <h2 className="pr-2">{user?.name}</h2>
          </div>
        </div>
      </nav>

    </div>
  )

};

export default Profile;