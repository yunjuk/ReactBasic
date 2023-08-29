import {NavLink} from "react-router-dom";
import classes  from "./Mainnavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink to="/" className={({isActive})=>
                    (isActive ?classes.active : undefined)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Products">Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
};

export default MainNavigation;