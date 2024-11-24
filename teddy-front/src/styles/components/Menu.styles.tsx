import styled from "styled-components";
import teddyLogo from "../../assets/teddy-logo.svg";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px 0px #0000001a;
  position: relative;
`;

export const Logo = styled.div`
  width: 100px;
  height: 50px;
  background: url(${teddyLogo}) no-repeat center;
  background-size: contain;
`;

export const MenuToggle = styled.div`
  font-size: 28px;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const ClientsMenu = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkItem = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: ${({ isActive }) => (isActive ? "#EC6724" : "#000000")};
  border-bottom: ${({ isActive }) =>
    isActive ? "1px solid #EC6724" : "none"};

  &:hover {
    color: #ec6724;
  }
`;

export const UserGreeting = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;

  span {
    font-weight: 700; /* Nome do usuário em negrito */
  }

  @media (max-width: 768px) {
    display: none; /* Esconde no mobile */
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ isOpen }) => (isOpen ? "#0000004D" : "transparent")};
  z-index: 90;
  transition: background-color 0.3s ease;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

export const DropdownMenu = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-310px")};
  width: 260px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 100;
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const HamburgerContent = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const CloseButton = styled.button`
  font-size: 28px;
  cursor: pointer;
  background: none;
  border: none;
  color: #ec6724;
  align-self: flex-end;
  margin-bottom: 20px;
  @media (min-width: 769px) {
    display: none;
  }
`;
