import { Button } from "components";
import { useDispatch } from "react-redux";

import { showSpinner, hideSpinner } from "states/spinner";

const Main = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(showSpinner);
          setTimeout(() => {
            dispatch(hideSpinner);
          }, 2000);
        }}
      >
        BUTTON
      </Button>
    </div>
  );
};

export default Main;
