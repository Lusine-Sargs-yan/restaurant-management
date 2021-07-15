import PhilosophyComponent from "../../components/about/Philosophy";
import Story from "../../components/about/Story";
import StaffData from "../../components/about/Staff/Staff";
import "./AboutStyle.css";


export default function About() {

  return (
    <div className="wrapper">
      <Story />
      <PhilosophyComponent />
      <StaffData />
    </div>
  );
}