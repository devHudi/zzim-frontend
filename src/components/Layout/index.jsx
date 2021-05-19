import { GlobalStyles } from "components";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const spinner = useSelector((state) => state.spinner);

  console.log({ spinner });

  return (
    <>
      {spinner.visible && "Spinner"}
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
