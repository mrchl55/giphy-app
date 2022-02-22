import React from "react";
import classes from '../assets/styles/GiphySingle.module.scss'
const GiphySingle = (props) => {
    return(
<div className={classes['giphy-single__inner']} id={`giphy-${props.id}`} ><img src={props.images.original.url} alt={props.title}/></div>
  )
}
export { GiphySingle as default}