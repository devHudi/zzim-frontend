import axios from "axios";
import qs from "qs";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const getUserItems = async (userId = null) => {
  /*
    [case1 - 자기자신 위시리스트]
    userId 파라미터가 null 일 경우 자기자신의 위시리스트 상품 목록 반환

    [case2 - 타인 위시리스트]
    불일치 시 만약 user 의 위시리스트가 private 이라면 status:401
    public 위시리스트라면 정상적으로 위시리스트 반환
  */
  let res = null;
  try {
    if (!userId) {
      res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/user`, {
        withCredentials: true,
      });
    } else {
      res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/user/${userId}`,
        {
          withCredentials: true,
        }
      );
    }
  } catch {
    return false;
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
