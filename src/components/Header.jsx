"use client"

import { useState } from "react"
import { List, X } from "@phosphor-icons/react"
import { Link, NavLink } from "react-router"
import logo from "../images/Logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="text-white shadow-md" style={{ backgroundColor: "#292625", minHeight: "110px" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap" style={{ paddingTop: "30px" }}>
          {/* Seção esquerda com logo e navegação */}
          <div className="flex items-center flex-1">
            <img src={logo || "/placeholder.svg"} alt="Logo" className="h-12 w-auto" />

            {/* Menu para desktop - visível apenas em telas médias e grandes */}
            <nav className="hidden md:flex items-center ml-6 space-x-6">
              <NavLink to={"/"}>Inicio</NavLink>
              <NavLink to={"/nosso-cafe"}>Nosso Café</NavLink>
              <NavLink to={"/noticias"}>Notícias</NavLink>
              <NavLink to={"/contato"}>Contato</NavLink>
              <NavLink to={"/cardapio"}>Cardápio</NavLink>
            </nav>
          </div>

          {/* Seção direita com botão de franquia */}
          <div className="flex items-center justify-end">
            {/* Botão hamburger visível apenas em telas pequenas */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
              </button>
            </div>

            {/* Botão de franquia para desktop */}
            <div className="hidden md:block">
              <Link to="/franquia">
                <button
                  className="text-white px-4 py-2 rounded font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: "#C7794A", color: "#3b2416" }}
                >
                  Seja um Franqueado
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Menu mobile - aparece quando o menu está aberto */}
        {isMenuOpen && (
          <div className="md:hidden w-full px-6 pb-4 bg-[#292625]">
            <nav className="flex flex-col space-y-4">
              <NavLink to={"/"} className="py-2 border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </NavLink>
              <NavLink
                to={"/nosso-cafe"}
                className="py-2 border-b border-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosso Café
              </NavLink>
              <NavLink to={"/noticias"} className="py-2 border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
                Notícias
              </NavLink>
              <NavLink to={"/contato"} className="py-2 border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
                Contato
              </NavLink>
              <NavLink to={"/cardapio"} className="py-2 border-b border-gray-700" onClick={() => setIsMenuOpen(false)}>
                Cardápio
              </NavLink>

              {/* Botão de franquia para mobile */}
              <div className="pt-2">
                <Link to="/franquia" onClick={() => setIsMenuOpen(false)}>
                  <button
                    className="w-full text-white px-4 py-2 rounded font-semibold transition hover:opacity-90"
                    style={{ backgroundColor: "#C7794A", color: "#3b2416" }}
                  >
                    Seja um Franqueado
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  )
}

export default Header
