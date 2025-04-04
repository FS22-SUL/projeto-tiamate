import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Simula uma busca no "db.json" ou em uma API
    fetch("http://localhost:3001/noticias")
      .then((response) => response.json())
      .then((data) => setNoticias(data))
      .catch((error) => console.error("Erro ao buscar notícias:", error));
  }, []);

  return (
    <div>
      <h1>Notícias</h1>
      <ul>
        {noticias.map((noticia) => (
          <li key={noticia.id}>
            <Link to={`/noticias/${noticia.id}`}>{noticia.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}