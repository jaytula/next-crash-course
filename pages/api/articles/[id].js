import { RSA_NO_PADDING } from "constants";
import { articles } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;
  const article = articles.find(e => e.id === id)

  if(!article) {
    res.status(404).json({message: `Article with the id of ${id} is not found` })
    return;
  }
  res.status(200).json(article);
}
