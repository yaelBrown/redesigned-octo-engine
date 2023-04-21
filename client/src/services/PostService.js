class PostService {
  posts_to_store(posts) {
    let cnt = 0
    const out = []
    try {
      posts.forEach(e => {
        // console.log(cnt)
        try {
          out.push(JSON.parse(e[1]))
        } catch (err) {
          console.log(err)
        }
        cnt++
      });
    } catch (err) {
      console.error(err)
      return false
    }
    return out
  }
}



export default PostService 