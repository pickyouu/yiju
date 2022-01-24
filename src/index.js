import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./Router"
import FootBar from "./components/FootBar"
import store from "./redux/store"
import {Provider} from "react-redux"

ReactDOM.render(
 <Provider store={store}>
    <Router>
    </Router>
 </Provider> 
,
  document.getElementById('root')
);
