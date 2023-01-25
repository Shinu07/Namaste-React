import { Outlet } from "react-router-dom";
//or
import Profile from "./ProfileClass";
import ProfileFunctional from "./profile";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the React Project</p>
      <Profile name={"Shinu-Class"} />
      <ProfileFunctional name={"shinu"} />
    </div>
  );
};
export default About;
