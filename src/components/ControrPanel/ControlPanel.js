import React, { useContext } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import StyledButton from "../StyledComponents/StyledButton";
import StyledSelect from "../StyledComponents/StyledSelect";
import StyledNav from "../StyledComponents/StyledNav";
//object for field size
const sizes = {
  width: [4, 5, 6, 7, 8],
  height: [2, 3, 4, 5, 6],
  get allSizes() {
    return this.width.reduce((acc, w) => {
      this.height.forEach(h => {
        if ((w * h) % 2 === 0) {
          acc.push({ w, h });
        }
      });
      return acc;
    }, []);
  },
};

export default function ControlPanel({ onChangeFieldSize, onStartGame, children }) {
  const { theme, toggleTheme } = useThemeContext();

  const buttonText = <i className={theme === "light" ? "fa-regular fa-moon" : "fa-regular fa-sun"}></i>;

  const handleFieldSizeChange = e => {
    const { value } = e.target;
    const [w, h] = value.split("x");
    onChangeFieldSize(+w, +h);
  };

  const handleStartGame = () => {
    onStartGame();
  };

  return (
    <StyledNav>
      <div>
        <StyledSelect theme={theme} onChange={handleFieldSizeChange} id="fieldSize" defaultValue={"Choose field size"}>
          <option disabled>Choose field size</option>
          {sizes.allSizes.map(({ w, h }, index) => (
            <option value={`${w}x${h}`} key={index}>
              {w}x{h}
            </option>
          ))}
        </StyledSelect>
      </div>
      <div>
        <StyledButton width={"40px"} radius={"50%"} height={"40px"} theme={theme} onClick={toggleTheme}>
          {buttonText}
        </StyledButton>
      </div>
      <div>
        <StyledButton theme={theme} height={"40px"} radius={"20px"} onClick={handleStartGame}>
          Start game
        </StyledButton>
      </div>
      {children}
    </StyledNav>
  );
}
