const { error } = require('console');
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


const addPost = (req, res )=>{
    const newPost = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost)

    fs.writeFileSync(`./db.js`, `module.exports = ${JSON.stringify(posts, null, 4)}`)

    return res.status(201).json(posts)
}

const updatePost = (req, res) => {
    const findPost = posts.find(element => element.title.toLowerCase() === req.params.title)
    
    if (!findPost) {
        return res.status(404).json({error:"Post not found"})
    }

    findPost.title = req.body.title
    findPost.slug = req.body.slug
    findPost.content = req.body.content
    findPost.image = req.body.image
    findPost.tags = req.body.tags

    fs.writeFileSync(`./db.js`, `module.exports = ${JSON.stringify(posts, null, 4)}`)

    return res.status(200).json(posts)
}


const deletePost = (req, res) => {
    const cancPost = posts.find(element => element.title.toLowerCase() === req.params.title)

    if (!cancPost) {
        return res.status(404).json({error: "Post not found"})
    }

    posts.splice(posts.indexOf(cancPost), 1)

    fs.writeFileSync(`./db.js`, `module.exports = ${JSON.stringify(posts, null, 4)}`)

    return res.status(200).json(posts)
}






module.exports = {
    getPosts,
    getSlug,
    getPostsByTag,
    addPost,
    updatePost,
    deletePost
};