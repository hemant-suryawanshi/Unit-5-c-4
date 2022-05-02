import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Logout = () => {
  const { handleAuth } = useContext(AuthContext);

  handleAuth(true);
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order

  return <></>;
};
