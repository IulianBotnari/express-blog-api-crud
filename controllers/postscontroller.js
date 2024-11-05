const posts = require('../db')

const fs = require(`fs`)

function getPosts(req, res) {
    res.json(posts);
}

const getSlug = (req, res) => {
    const singlePost = posts.find(element => element.slug === req.params.slug)

    if (!singlePost) {
        return res.status(404).json({ error: `404` })
    } else {
        res.status(200).json({ data: singlePost })
    }
}





const getPostsByTag = (req, res) => {

    let insertTag = req.params.tags
    const includedTag = posts.filter(element => element.tags.includes(insertTag))

    if (includedTag.length === 0) {
        return res.status(404).json({ error: `Nessun post trovato` });
    }

    res.status(200).json({ data: includedTag });
};


const addPost = (res, req)=>{
    const newPost = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost)

    fs.writeFileSync(`./db/db.js`, `module.exports = ${JSON.stringify(posts, null, 4)}`)

    return res.status(201).json(posts)
}



module.exports = {
    getPosts,
    getSlug,
    getPostsByTag,
    addPost
};