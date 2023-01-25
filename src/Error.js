import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>OOps! Page Not Found</h1>
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
};
export default Error;
