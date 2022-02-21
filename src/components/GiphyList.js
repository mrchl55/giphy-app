import GiphySingle from "./GiphySingle";
import {useEffect, useState, useRef, useCallback, useContext} from "react";
import GiphyContext from "../context/giphy-context";
import useGiphySearch from "../hooks/useGiphySearch";
import classes from '../assets/styles/GiphyList.module.scss'


const GiphyList = () => {
    const {searchQuery, offset, setOffset} = useContext(GiphyContext)
    const {
        giphyData,
        hasMore,
        loading,
        error
    } = useGiphySearch(searchQuery, offset)
    const observer = useRef()
    const lastGiphyElementRef = useCallback(node => {

        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            console.log(entries[0])
            if (entries[0].isIntersecting && hasMore) {
                console.log('viisble')
                setOffset(prevOffset => (prevOffset + 1) * 5)
            }
        })
        if (node) observer.current.observe(node)
    }, [  hasMore, loading])



    return (
        <ul className={classes['giphy-list']}>

            {giphyData?.length && giphyData.map((giphy, index) => {
                if (giphyData.length === index + 1) {
                    return <li className={classes['giphy-list-item']} ref={lastGiphyElementRef} key={`${giphy.id}-${index}`}><GiphySingle {...giphy}/></li>
                } else {
                    return <li key={`${giphy.id}-${index}`} className={classes['giphy-list-item']}><GiphySingle {...giphy}/>
                    </li>
                }
            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </ul>
    )
}

export {GiphyList as default}