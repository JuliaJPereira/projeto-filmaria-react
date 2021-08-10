import axios from "axios";

// Base URL: https://sujeitoprogramador.com/ é a rota q não vai mudar
// Rota que traz todos os filmes: r-api/?api=filmes/
// Rota para trazer um filme único: r-api/?api=filmes/123 (123 = id do filme)

const api = axios.create({
  baseURL: "https://sujeitoprogramador.com",
});

export default api;
