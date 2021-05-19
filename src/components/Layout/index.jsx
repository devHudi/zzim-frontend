import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { GlobalStyles, PageSpinner } from "components";

const Layout = ({ children }) => {
  const spinner = useSelector((state) => state.spinner);

  return (
    <>
      {spinner.visible && <PageSpinner />}
      <GlobalStyles />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        draggable
        hideProgressBar
      />
      {children}
    </>
  );
};

export default Layout;
