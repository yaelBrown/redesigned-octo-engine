import connection from "@/utils/conn"; 

export default function handler(req, res) {
  try {
    connection.query(
      "SELECT id, content FROM posts ORDER BY id DESC LIMIT 30",
      function(err, response, fields) {
        res.status(200).json(response)
      }
    )
  } catch(err) {
    res.status(400).json(err)
  } 
}