const dummyApiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("DUMMY");
    }, 2000);
  });
};

export const getUserItems = async (userId) => {
  /*
    [case1 - 자기자신 위시리스트]
    userId 파라미터가 null 일 경우 자기자신의 위시리스트 상품 목록 반환

    [case2 - 타인 위시리스트]
    불일치 시 만약 user 의 위시리스트가 private 이라면 status:401
    public 위시리스트라면 정상적으로 위시리스트 반환
  */

  const res = await dummyApiCall();

  const isPrivate = false;
  if (isPrivate) return false;

  const dummyItems = [
    {
      id: "item1",
      image:
        "https://shopping-phinf.pstatic.net/main_2570920/25709205299.20210319161324.jpg?type=f640",
      name: "메종키츠네 더블 폭스헤드 반팔 티셔츠",
      price: 35000,
      shoppingMallName: "MUST IT",
      isPurchased: false,
    },
    {
      id: "item2",
      image:
        "https://image.a-land.co.kr/data/aland_data/images/product/11/00/10/53/37/b_1100105337.gif",
      name: "[국내배송] 21SS 아미 스몰 하트 로고 반팔 티셔츠 네이비 E21HJ108 723",
      price: 148000,
      shoppingMallName: "ALAND",
      isPurchased: true,
    },
    {
      id: "item3",
      image:
        "https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2021/03/08/15/2/bbba37d0-1da7-4d22-aa0c-d0320d30fb38.jpg",
      name: "당도선별 성주 벽진참외",
      price: 999999,
      shoppingMallName: "COUPANG",
      isPurchased: false,
    },
  ];

  return dummyItems;
};

export const getItemDetail = async (itemId) => {
  const res = await dummyApiCall();

  const dummyItem = {
    image:
      "https://shopping-phinf.pstatic.net/main_2570920/25709205299.20210319161324.jpg?type=f640",
    name: "메종키츠네 더블 폭스헤드 반팔 티셔츠",
    price: 350000,
    shippingPrice: 2500,
    logoImage:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Coupang_logo.png",
    createdDate: new Date(),
    url: "https://www.naver.com",
    isPurchased: false,
  };

  return dummyItem;
};

export const updateItemDetail = async (itemId, name, price, shippingPrice) => {
  const res = await dummyApiCall();

  // 해당 상품 데이터를 수정하고, 수정된 데이터를 getItemDetail과 동일하게 반환합니다.
  // session 으로 권한 확인 필요

  const dummyItem = {
    image:
      "https://shopping-phinf.pstatic.net/main_2570920/25709205299.20210319161324.jpg?type=f640",
    name,
    price,
    shippingPrice,
    logoImage:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Coupang_logo.png",
    createdDate: new Date(),
    url: "https://www.naver.com",
  };

  return dummyItem;
};

export const purchaseItem = async (itemId) => {
  const res = await dummyApiCall();

  // 해당 상품 데이터의 구매여부를 true 로 변경합니다
  // session 으로 권한 확인 필요
  // 성공여부만 status 로 반환해주세요!

  return true;
};

export const removeItem = async (itemId) => {
  const res = await dummyApiCall();

  // 상품 데이터를 삭제합니다
  // session 으로 권한 확인 필요
  // 성공여부만 status 로 반환해주세요!

  return true;
};

export const addItem = async (itemUrl) => {
  const res = await dummyApiCall();

  /*
    response 의 http status 가 200이면 True 반환, 아니면 False 반환 
    서버에는 세션으로 유저 판단해서, 해당 유저 위시리스트에 상품 추가해주세요.
  */

  return true;
};
