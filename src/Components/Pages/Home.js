import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../../Actions/AuthAction";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(login("dev@gmail.com", "dev12345"));
    dispatch(register("john doe", "john@gmail.com", "john12345", "ADMIN"));
  }, []);
  return <div>Home</div>;
}
