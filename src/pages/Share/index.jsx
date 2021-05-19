import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUrl } from "states/form";
import qs from "query-string";
import { useEffect } from "react";

const Share = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const query = qs.parse(location && location.search);
  const { title, text } = query;

  useEffect(() => {
    dispatch(setUrl(text));
    history.push("/fetching");
  }, [dispatch, history, text]);

  return <></>;
};

export default Share;
