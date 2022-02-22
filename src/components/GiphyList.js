import GiphySingle from "./GiphySingle";
import {useRef, useCallback, useContext} from "react";
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
            if (entries[0].isIntersecting && hasMore) {
                setOffset(prevOffset => (prevOffset + 1) * 5)
            }
        })
        if (node) observer.current.observe(node)
    }, [hasMore, loading, setOffset])

    return (
        <ul className={classes['giphy-list']}>

            {giphyData.map((giphy, index) => {
                if (giphyData.length === index + 1) {
                    return <li className={classes['giphy-list-item']} ref={lastGiphyElementRef}
                               key={`${giphy.id}-${index}`}><GiphySingle {...giphy}/></li>
                } else {
                    return <li key={`${giphy.id}-${index}`} className={classes['giphy-list-item']}>
                        <GiphySingle {...giphy}/>
                    </li>
                }
            })}
            <p>{loading && 'Loading...'}</p>
            <p>{error && 'Error'}</p>
            <p>{(!loading && !giphyData?.length) && 'No results'}</p>
        </ul>
    )
}

export {GiphyList as default}