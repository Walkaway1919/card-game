import Score from "./Score/Score";
import { ThemeContext } from '../../App'
import { useContext } from "react";
import { Toggler } from "./Toggler/Toggler";
import './Header.scss';



export const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const changeTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");
    return <div className="header">
        <button>Начать</button>
        <Toggler/>
        <Score/>
    </div>
}