import axios from "axios";
import qs from "qs";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const getUserItems = async (userId = null) => {
  let res = null;
  if (!userId) {
    try {
      res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/user`, {
        withCredentials: true,
      });
    } catch {
      return 0;
    }
  } else {
    try {
      res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/user/${userId}`,
        {
          withCredentials: true,
        }
      );
    } catch {
      return 1;
    }
  }

  const items = (await res).data.data;

  return items;
};

export const getItemDetail = async (itemId) => {
  let res = null;
  try {
    res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/item/${itemId}`,
      {
        withCredentials: true,
      }
    );
  } catch {
    return false;
  }

  const item = (await res).data;

  return item;
};

export const updateItemDetail = async (itemId, name, price, shippingPrice) => {
  const form = qs.stringify({
    name,
    price,
    shipping: shippingPrice,
  });

  let res = null;
  try {
    res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/item/${itemId}/edit`,
      form,
      { withCredentials: true }
    );
  } catch {
    return false;
  }

  return true;
};

export const purchaseItem = async (itemId) => {
  let res = null;
  try {
    res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/item/${itemId}/purchased`,
      {},
      { withCredentials: true }
    );
  } catch {
    return false;
  }

  return true;
};

export const removeItem = async (itemId) => {
  let res = null;
  try {
    res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/item/${itemId}/delete`,
      {},
      { withCredentials: true }
    );
  } catch {
    return false;
  }

  return true;
};

export const addItem = async (itemUrl) => {
  const form = qs.stringify({
    url: itemUrl,
  });

  let res = null;
  try {
    res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/item/add`,
      form,
      {
        withCredentials: true,
      }
    );
  } catch {
    return false;
  }

  return true;
};
