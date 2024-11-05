axios.get("http://127.0.0.1:3000/posts")
.then(response => {
    const posts = response.data
    const bodyEL = document.querySelector("body")

    bodyEL.insertAdjacentHTML("beforeend", posts)
}
)
.catch(error =>{
    console.error(`Error: ${error}`)
})