import React, {useContext} from "react";
import classes from '../assets/styles/Search.module.scss'
import GiphyContext from "../context/giphy-context";
const Search = () => {
    const {setSearchQuery} = useContext(GiphyContext)
    const onSearchSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(e.target['search'].value)
        e.target['search'].value = '';
    }
    return (
        <form onSubmit={onSearchSubmit} className={classes.search__container}>
            <label htmlFor='search'>Search</label>
            <input id='search'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export {Search as default}