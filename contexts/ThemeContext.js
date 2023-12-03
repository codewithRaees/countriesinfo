import { createContext, useState } from "react";

//const[a , seta]=useState('lskjlfsk')
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isdark, setisdark] = useState(
    JSON.parse(localStorage.getItem("LightDarkMode"))
  );
  return (
    <ThemeContext.Provider value={[isdark, setisdark]}>
      {children}
    </ThemeContext.Provider>
  );
}
