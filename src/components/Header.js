import classes from '../assets/styles/Header.module.scss'
const Header = () => {
    return <header className={classes.header__container}>
        <h1>Giphy</h1>
    </header>
}

export {Header as default}