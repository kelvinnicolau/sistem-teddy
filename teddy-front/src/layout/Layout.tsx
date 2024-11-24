import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Menu from "../components/Menu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    setUserName(name);
  }, []);

  const pagesWithMenu = ["/clientes", "/clientes-selecionados", "/produtos", "/"];

  return (
    <>
      {pagesWithMenu.includes(location.pathname) && <Menu userName={userName} />}
      {children}
    </>
  );
};

export default Layout;
