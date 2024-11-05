const posts = require('../db')

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




module.exports = {
    getPosts,
    getSlug,
    getPostsByTag
};