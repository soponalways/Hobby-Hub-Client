import React, { use } from 'react';
import ThemeContext from './ThemeContext';

const ThemeToggole = () => {
    const { theme, setTheme} = use(ThemeContext); 
    const handleToggole = () => {
        setTheme( (prev) => { 
            if(prev == 'dark') {
                localStorage.setItem("theme", "light")
                return "light"
            } else {
                localStorage.setItem("theme", "dark")
                return "dark"
            }
        })
    }
    return (
        <div>
            <input type="checkbox" checked={theme == "light"}  onChange={handleToggole} className="toggle toggle-lg" />
        </div>
    );
};

export default ThemeToggole;