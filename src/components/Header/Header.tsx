//компонент Шапка

import classes from './Header.module.scss'
//import object

export const Header = () => {
    return (
        // <header className="header">
        <header className={classes.header}>
            <div className={classes.container}>
                <a href="/" className={classes.link}>ToDo</a>
                {/* <a href="/" className={`${classes.link} ${classes.active}`}>ToDo</a> */}
            </div>
        </header>
    )
}