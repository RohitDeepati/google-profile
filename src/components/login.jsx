import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated) return null;

  return (
    <div className="text-center  m-4 rounded-md bg-gray-500 w-max text-white mx-auto flex flex-col items-center mb-2">
      <div className="text-lg font-bold p-2">Welcome to Google Profile </div>
      <button onClick={() => loginWithRedirect()} className="bg-blue-500 py-1 px-2 rounded-md mb-2">Log In</button>
    </div>
  );
};

