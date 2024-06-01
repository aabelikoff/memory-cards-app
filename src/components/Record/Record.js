import React, { memo } from "react";
import StyledBorderedContainer from "../StyledComponents/StyledBorderedContainer";
import { useThemeContext } from "../../contexts/ThemeContext";

const Record = memo(function Record({ width, height, nMoves, time, getTimeStr }) {
  const timeInfo = getTimeStr(time);
  const { theme } = useThemeContext();
  return (
    <StyledBorderedContainer theme={theme} width={"40%"}>
      <p>
        Record
        <span className="hide-small">
          &nbsp;for field {width}x{height} is
        </span>
        {nMoves > 0 ? `: ${nMoves} moves` : ": unsettled"}
      </p>
      <p>Time{time > 0 ? `: ${timeInfo}` : ": unsettled"}</p>
    </StyledBorderedContainer>
  );
});
export default Record;
