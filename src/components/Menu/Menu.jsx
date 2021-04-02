import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav className="menu">
            <NavLink to="/react-router/" exact className="menu__item" activeClassName="menu__item-active">главная</NavLink>
            <NavLink to="/drift" className="menu__item" activeClassName="menu__item-active">дрифт-такси</NavLink>
            <NavLink to="/timeattack" className="menu__item" activeClassName="menu__item-active">Time Attack</NavLink>
            <NavLink to="/forza" className="menu__item" activeClassName="menu__item-active">Forza Karting</NavLink>
        </nav>
    )
}

export default Menu