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
  const res = axios.get(`${process.env.REACT_APP_API_BASE_URL}/user`, {
    withCredentials: true,
  });

  const items = (await res).data.data;

  return items;
};

export const getItemDetail = async (itemId) => {
  const res = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/item/${itemId}`,
    {
      withCredentials: true,
    }
  );
  const item = (await res).data;

  return item;
};

export const updateItemDetail = async (itemId, name, price, shippingPrice) => {
  const form = qs.stringify({
    name,
    price,
    shipping: shippingPrice,
  });

  const res = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/item/${itemId}/edit`,
    form,
    { withCredentials: true }
  );

  return true;
};

export const purchaseItem = async (itemId) => {
  const res = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/item/${itemId}/purchased`,
    {},
    { withCredentials: true }
  );

  // 해당 상품 데이터의 구매여부를 true 로 변경합니다
  // session 으로 권한 확인 필요
  // 성공여부만 status 로 반환해주세요!

  return true;
};

export const removeItem = async (itemId) => {
  const res = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/item/${itemId}/delete`,
    {},
    { withCredentials: true }
  );
  return true;
};

export const addItem = async (itemUrl) => {
  const form = qs.stringify({
    url: itemUrl,
  });

  const res = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/item/add`,
    form,
    { withCredentials: true }
  );

  return true;
};
