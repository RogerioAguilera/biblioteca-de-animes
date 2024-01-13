import mongoose from "mongoose";

const animeSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    autor: { type: String, required: true },
    anoLancamento: { type: String },
    genero: { type: String },
    criador: { type: String },
  },
  {
    versionKey: false,
  }
);

const anime = mongoose.model("animes", animeSchema);
