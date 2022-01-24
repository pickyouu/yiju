import React from "react";
import {withRouter} from "react-router-dom"
import DetailView from "./DetailView";
export default withRouter(
  (props)=>{
    return <div>
      <DetailView id={props.match.params.id}></DetailView>
    </div>
  }
)