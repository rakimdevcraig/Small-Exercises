let form = document.querySelector('#searchForm')
let section = document.querySelector('#section')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let searchTerm = form.elements.query.value
    // console.log(query)
    // let q = `https://api.tvmaze.com/search/shows?q=${query}`
    const res =  await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    let imgList = res.data
    makeImages(imgList)
    form.elements.query.value = ''
})

const makeImages = (shows) =>{
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            section.append(img)
        }
         
    }
}