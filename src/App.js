import { IoMdHome } from "react-icons/io";
import Image from "./images/communication.png";
import SpotifyOne from "./images/default.jpeg"
import SpotifyTwo from "./images/default (1).jpeg"
import SpotifyThree from "./images/default (2).jpeg"
import SpotifyFour from "./images/default (3).jpeg"
import SpotifyFive from "./images/default (4).jpeg"
import SpotifySix from "./images/default (5).jpeg"
import Body from './Body';
import Navbar from "./Navbar";
import FirstComponent from "./FirstComponent";
import Button from "./Button";
import AddTodo from "./Todo";

function App() {
  let message = "pass message to first component"
  function oneFunction() {
    alert('I am login button')
  }
  function twoFunction() {
    alert('I am submit button')
  }
  function alertFunction() {
    alert('I am signup button')
  }
  return (
    <>
    <div className="d-flex justify-content-between mt-4 p-5">
      <Button anyFunction = {oneFunction} sty = "butt" spotifyImg = {SpotifyOne} styling = 'spotify'/>
      <Button anyFunction = {twoFunction} sty = "butt" spotifyImg = {SpotifyTwo} styling = 'spotify'/>
      <Button anyFunction = {alertFunction} sty = "butt" spotifyImg = {SpotifyThree} styling = 'spotify'/>
      <Button anyFunction = {twoFunction} sty = "butt" spotifyImg = {SpotifyFour} styling = 'spotify'/>
      <Button anyFunction = {alertFunction} sty = "butt" spotifyImg = {SpotifyFive} styling = 'spotify'/>
      <Button anyFunction = {twoFunction} sty = "butt" spotifyImg = {SpotifySix} styling = 'spotify'/>
    </div>
      {/* <Navbar /> */}
      {/* <Body /> */}
      <FirstComponent data={message} name="firstcomponent" />
      <AddTodo/>
    </>
  );
}

export default App;
