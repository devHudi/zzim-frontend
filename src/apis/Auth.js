import axios from "axios";
import qs from "qs";

export const signIn = async (username, password) => {
  const form = qs.stringify({
    username,
    password,
  });

  let res = null;
  try {
    res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/user/signin`,
      form,
      { withCredentials: true }
    );

    localStorage.setItem("username", res.data.data.username);
    return true;
  } catch {
    return false;
  }
};

export const signOut = async () => {
  try {
    await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/user/signout`,
      {},
      { withCredentials: true }
    );
    localStorage.removeItem("username");
  } catch {
    return false;
  }

  return true;
};

export const signUp = async (username, password) => {
  const form = qs.stringify({
    username,
    nickname: username,
    password,
  });

  try {
    await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/user/signup`,
      form,
      { withCredentials: true }
    );

    localStorage.setItem("username", username);
  } catch {
    return false;
  }

  return true;
};
