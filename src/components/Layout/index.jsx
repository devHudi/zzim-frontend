import { useSelector } from "react-redux";
import { GlobalStyles, PageSpinner } from "components";

const Layout = ({ children }) => {
  const spinner = useSelector((state) => state.spinner);

  return (
    <>
      {spinner.visible && <PageSpinner />}
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
