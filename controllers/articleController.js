const axios = require('axios')

const articleList =  async (req, res)=> {
    let {data: posts} = await axios.get("https://jsonplaceholder.typicode.com/posts")
    res.render("Article.index", {posts})
}



module.exports = {articleList}