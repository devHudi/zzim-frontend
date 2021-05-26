import axios from "axios";
import qs from "qs";

export const signIn = async (username, password) => {
  const form = qs.stringify({
    username,
    password,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/user/signin`,
      form,
      { withCredentials: true }
    );
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
  } catch {
    return false;
  }

  return true;
};
