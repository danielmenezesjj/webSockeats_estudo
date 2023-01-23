import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "link"
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("dan-websockets");
  documentosColecao = db.collection("documentos");

  console.log("conectado ao banco de dados com sucesso!");
} catch (error) {
  console.error(error);
}

export {documentosColecao}
