import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Noticia() {
  const { id } = useParams(); // Obtém o parâmetro "id" da URL
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    // Simula uma busca no "db.json" ou em uma API
    fetch(`http://localhost:3001/noticias/${id}`)
      .then((response) => response.json())
      .then((data) => setNoticia(data))
      .catch((error) => console.error("Erro ao buscar notícia:", error));
  }, [id]);

  if (!noticia) {
    return <p>Carregando...</p>;
  }

  return (
    <>
    <div>
      <h1>{noticia.titulo}</h1>
      <img src={noticia.imagem} alt={noticia.titulo} />
      <p>{noticia.descricao}</p>
      <p><strong>Data:</strong> {noticia.data}</p>      
    </div>
    <Link to={-1}>Voltar</Link>
    </>
  );
}