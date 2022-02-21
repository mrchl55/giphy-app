import React from "react";
import classes from '../assets/styles/GiphySingle.module.scss'
const GiphySingle = (props) => {
    return(
<div className={classes['giphy-single__inner']}><img src={props.images.original.url}/></div>
  )
}

export { GiphySingle as default}