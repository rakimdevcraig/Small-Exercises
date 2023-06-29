let form = document.querySelector('#form')
let uname = document.querySelector('#username')
let tweetInput = document.querySelector('#tweet')
let tweetsList = document.querySelector('#tweets')


form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(uname.value)
    console.log(tweetInput.value)
    //another way we can get the value is by looking at the form element
    // console.log(form.elements.tweet.value) how we can access the tweet value
    //console.log(form.elements.username.value)
    let item = document.createElement('li')
    let name = document.createElement('p')
    let tweet = document.createElement('p')
    name.innerText = uname.value
    tweet.innerText = tweetInput.value
    item.append(name)
    item.append(tweet)
    item.style.listStyle = 'none'
    tweetsList.append(item)
    uname.value = ''
    tweetInput.value = ''
})