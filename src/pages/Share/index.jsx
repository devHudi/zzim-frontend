import { useLocation } from "react-router-dom";
import qs from "query-string";

const Share = () => {
  const location = useLocation();
  const query = qs.parse(location && location.search);
  const { title, text } = query;

  return (
    <>
      title: {title}
      <br />
      url: {text}
      <br />
    </>
  );
};

export default Share;
