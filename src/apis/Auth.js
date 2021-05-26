import axios from "axios";
import qs from "qs";

export const signIn = async (username, password) => {
  const form = qs.stringify({
    username,
    password,
  });

  const res = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/user/signin`,
    form,
    { withCredentials: true }
  );

  return true;
};

export const signUp = async (username, password) => {
  const form = qs.stringify({
    username,
    nickname: username,
    password,
  });

  const res = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/user/signup`,
    form,
    { withCredentials: true }
  );

  return true;
};
