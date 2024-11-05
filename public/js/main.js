axios.get("http://127.0.0.1:3000/posts")
    .then(response => {
        const posts = response.data
        
        posts.forEach(element => {
            const bodyEL = document.querySelector("body")
            const singlePost = element
            let { title, slug, content, image, tags } = singlePost
           

            let markup = `
                <h1>Post</h1>
                <p>${title}</p>
                <p>${slug}</p>
                <p>${content}</p>
                <img scr="${image.src}" alt="Immagine">
                <p>${tags}</p>
            `
            bodyEL.insertAdjacentHTML("beforeend", markup)
        });











    }
    )
    .catch(error => {
        console.error(`Error: ${error}`)
    })