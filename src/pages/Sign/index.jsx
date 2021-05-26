import { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import toast from "react-simple-toasts";
import { useDispatch } from "react-redux";
import { showSpinner, hideSpinner } from "states/spinner";
import { signIn, signUp } from "apis/Auth";

import { BackButton, ButtonGroup, Button } from "components";

const FormWrapper = styled.div`
  padding-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 24pt;
  line-height: 1.3;

  & > strong {
    font-weight: bold;
  }
`;

const Description = styled.div`
  margin-bottom: 30px;
  color: #adb5bd;
  font-size: 13pt;
`;

const TextField = styled.input`
  margin-bottom: 10px;
  padding: 15px 15px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ced4da;
  outline: none;
  transition: border-bottom 0.3s;

  &:last-of-type {
    margin-bottom: 60px;
  }

  &:hover {
    border-bottom: 1px solid #495057;
  }
`;

const validForm = (id, password) => {
  return id.length > 5 && password.length > 6; //TODO: add regex
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const isValid = useMemo(() => {
    return validForm(id, password);
  }, [id, password]);

  const handleSignIn = async () => {
    dispatch(showSpinner());
    const res = await signIn(id, password);
    if (!res) {
      toast("로그인에 문제가 발생했습니다.");
      return;
    }
    dispatch(hideSpinner());
    toast("로그인 되었습니다. ");
    history.push("/");
  };

  return (
    <FormWrapper>
      <Title>
        다시 돌아오셨군요,
        <br />
        <strong>반갑습니다.</strong>
      </Title>
      <Description>하단 정보를 입력하여 로그인하세요.</Description>
      <TextField onChange={(e) => setId(e.target.value)} placeholder="ID" />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="비밀번호"
      />
      <ButtonGroup>
        <Button onClick={handleSignIn} disabled={!isValid}>
          로그인
        </Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const isValid = useMemo(() => {
    return validForm(id, password) && password === passwordRepeat;
  }, [id, password, passwordRepeat]);

  const handleSignUp = async () => {
    dispatch(showSpinner());
    const res = await signUp(id, password);
    if (!res) {
      toast("로그인에 문제가 발생했습니다.");
      return;
    }
    dispatch(hideSpinner());
    toast("회원가입 되었습니다. ");
    history.push("/");
  };

  return (
    <FormWrapper>
      <Title>
        ZZIM이 처음이시군요,
        <br /> <strong>환영합니다.</strong>
      </Title>
      <Description>하단 정보를 입력하여 회원가입하세요.</Description>
      <TextField onChange={(e) => setId(e.target.value)} placeholder="ID" />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="비밀번호"
      />
      <TextField
        onChange={(e) => setPasswordRepeat(e.target.value)}
        type="password"
        placeholder="비밀번호 재입력"
      />
      <ButtonGroup>
        <Button onClick={handleSignUp} disabled={!isValid}>
          회원가입
        </Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

const MenuWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const PageWrapper = styled.div`
  padding: 50px 30px;
`;

const ModeButton = styled.button`
  padding: 5px 0;
  border: none;
  background-color: #ffffff;
  font-size: 10pt;
  color: #adb5bd;
  transition: color 0.3s;

  ${(props) =>
    props.activated &&
    `
  border-bottom: 1px solid #212529;
  color: #212529;
  font-weight: bold;
`}

  & {
    margin-right: 30px;
  }
`;

const Sign = () => {
  const [signIn, setSignIn] = useState(true);

  const handleSignIn = () => {
    setSignIn(true);
  };

  const handleSignUp = () => {
    setSignIn(false);
  };

  return (
    <>
      <MenuWrapper>
        <BackButton />
      </MenuWrapper>
      <PageWrapper>
        <ModeButton activated={signIn} onClick={handleSignIn}>
          로그인
        </ModeButton>
        <ModeButton activated={!signIn} onClick={handleSignUp}>
          회원가입
        </ModeButton>

        {signIn ? <SignInForm /> : <SignUpForm />}
      </PageWrapper>
    </>
  );
};

export default Sign;
