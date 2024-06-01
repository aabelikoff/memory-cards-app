import styled from "styled-components";
import media from "./media";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  ${media.medium`
    gap: 6px;
  `}
  ${media.small`
    gap: 4px;
  `}
`;

export default StyledNav;
