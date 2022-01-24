import React from "react";
import HeadBar2 from "../../components/Headbar2";
import CurrentCity from "./CurrentCity";
//import CityList from "./CityList";
import CityLists from "./CityLists"
function City(props) {
  return(
    <div>
      <HeadBar2></HeadBar2>
      <CurrentCity></CurrentCity>
      <CityLists></CityLists>
    </div>
  )
}

export default City