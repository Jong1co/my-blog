import styled from "@emotion/styled";

export const Header = styled.header`
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  ${({ theme }) => theme.font.header_02}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const List = styled.li`
  ${({ theme }) => theme.font.title_02};
  color: ${({ theme }) => theme.colors.neutral_50};
`;
