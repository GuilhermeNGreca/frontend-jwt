import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  redirectTo?: string;
}

export const Private: React.FC<PrivateRouteProps> = ({
  redirectTo = "/login",
}) => {
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <div>
        <h1>Página privada</h1>
        <Navigate to={"/private"} />
      </div>
    );
  } else {
    return <Navigate to={redirectTo} />;
  }
};
