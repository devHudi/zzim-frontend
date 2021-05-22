const dummyApiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("DUMMY");
    }, 2000);
  });
};

export const signIn = async (id, password) => {
  /*
    서버에 유저 ID와 Password 전송 후 200이면 반환된 sessionId 쿠키에 저장
    아니면 로그인 실패
  */

  const res = await dummyApiCall();
  return true;
};

export const signUp = async (id, password) => {
  /*
    서버에 유저 ID와 Password 전송 후 200이면 반환된 sessionId 쿠키에 저장
    아니면 회원가입 실패
  */

  const res = await dummyApiCall();
  return true;
};
