import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Header,
  Logo,
  MenuToggle,
  ClientsMenu,
  DropdownMenu,
  LinkItem,
  UserGreeting,
  Overlay,
  HamburgerContent,
  CloseButton,
} from "../styles/components/Menu.styles";

interface MenuProps {
  userName: string | null;
}

const Menu: React.FC<MenuProps> = ({ userName }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <>
      <Header>
        {/* Logo */}
        <Logo />

        {/* Menu Hamburguer (Desktop) */}
        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>☰</MenuToggle>

        {/* Menu de Clientes (Desktop) */}
        <ClientsMenu>
          <LinkItem
            isActive={location.pathname === "/clientes"}
            onClick={() => navigate("/clientes")}
          >
            Clientes
          </LinkItem>
          <LinkItem
            isActive={location.pathname === "/clientes-selecionados"}
            onClick={() => navigate("/clientes-selecionados")}
          >
            Clientes Selecionados
          </LinkItem>
          <LinkItem onClick={handleLogout}>Sair</LinkItem>
        </ClientsMenu>

        {/* Saudação ao Usuário (Desktop) */}
        <UserGreeting>
          Olá, <span>{userName}</span>!
        </UserGreeting>
      </Header>

      {/* Overlay e Dropdown do Hambúrguer */}
      <Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
      <DropdownMenu isOpen={menuOpen}>
        <CloseButton onClick={() => setMenuOpen(false)}>×</CloseButton>
        <HamburgerContent>
          <LinkItem onClick={() => navigate("/")}>Home</LinkItem>
          <LinkItem onClick={() => navigate("/produtos")}>Produtos</LinkItem>
          <LinkItem
            isActive={location.pathname === "/clientes"}
            onClick={() => navigate("/clientes")}
          >
            Clientes
          </LinkItem>
          <LinkItem
            isActive={location.pathname === "/clientes-selecionados"}
            onClick={() => navigate("/clientes-selecionados")}
          >
            Clientes Selecionados
          </LinkItem>
          <LinkItem onClick={handleLogout}>Sair</LinkItem>
          <UserGreeting>
            Olá, <span>{userName}</span>!
          </UserGreeting>
        </HamburgerContent>
      </DropdownMenu>
    </>
  );
};

export default Menu;
