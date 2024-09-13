import { Outlet } from "react-router-dom";
import ErrorSpace from "../pages/ErrorSpace";
import ErrorBoundary from "../shared/common/atoms/ErrorBoundary";

const Harness = () => {
  return (
    <ErrorBoundary fallback={<ErrorSpace isRenderError={true}/>}>
      <Outlet />
    </ErrorBoundary>
  );
};

export default Harness;
