import express from "express";

const app = express();
app.use(express.json());

const animes = [
  {
    id: 1,
    titulo: "Cowboy Bebop",
  },
  {
    id: 2,
    titulo: "Akira",
  },
];

function buscaAnime(id) {
  return animes.findIndex((anime) => {
    return anime.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Lista de Animes");
});

app.get("/animes", (req, res) => {
  res.status(200).json(animes);
});

app.get("/animes/:id", (req, res) => {
  const index = buscaAnime(req.params.id);
  res.status(200).json(animes[index]);
});

app.post("/animes", (req, res) => {
  animes.push(req.body);
  res.status(201).send("Anime cadastrado com sucesso");
});

app.put("/animes/:id", (req, res) => {
  const index = buscaAnime(req.params.id);
  animes[index].titulo = req.body.titulo;
  res.status(200).json(animes);
});

export default app;
