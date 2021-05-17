import { GlobalStyles } from "components";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
