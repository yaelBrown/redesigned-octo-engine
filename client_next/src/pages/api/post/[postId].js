import connection from "@/utils/conn"; 

export default function handler(req, res) {
  try {
    connection.execute(
      "SELECT id, content FROM posts WHERE id = ?",
      [req.query.postId],
      function(err, response, fields) {
        if (err) res.status(404).json({id: req.query.postId, content: false})
        res.status(200).json(response)
      }
    ) 
  } catch(err) {
    res.status(400).json(err)
  }
}