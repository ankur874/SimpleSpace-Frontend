import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
// import setAuthToken from "../utils/setAuthToken";
import { API } from "../API";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register =
  (name, email, password, user_type) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, password, email, user_type });
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(user_type);
    console.log(body);
    try {
      const res = await axios.post(`${API}/users/signup`, body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // dispatch(loadUser());
      console.log(res);
    } catch (err) {
      const errors = err.response.errors;

      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
      // }

      console.log(err);
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  console.log(body);
  try {
    const res = await axios.post(`${API}/users/login`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
    console.log(res);
  } catch (err) {
    const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    // }
    console.log(errors);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
