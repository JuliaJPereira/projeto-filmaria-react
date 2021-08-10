import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id) {
    /* O método filter é usado abaixo da seguinte forma: ele percorre todos os filmes do array, e retorna os que passam na condição. No caso, a condição é: retornar todos os filmes menos esse que foi clicado em deletar. */

    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    /* Então, abaixo atualizamos o filme para setFilmes e atualizamos o localStorge */
    setFilmes(filtroFilmes);
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
    toast.success("Filme deletado com sucesso!");
  }

  return (
    <div id="meus-filmes">
      <h1>Meus filmes salvos</h1>

      {filmes.length === 0 && (
        <span>Você não possui nenhum filme salvo :( </span>
      )}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => handleDelete(item.id)}>Deletar</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
