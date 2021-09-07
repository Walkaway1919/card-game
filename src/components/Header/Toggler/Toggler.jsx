import { ThemeContext } from '../../../App'
import { useContext } from "react";
import './Toggler.scss';
export const Toggler = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const changeTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");
    return  <>
                <input type="checkbox" id="switch" />
                <label for="switch" onClick={()=>setTheme(changeTheme)}/>
            </>
}
