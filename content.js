const api_url = 'https://api.quotable.io/random'

var body = document.getElementsByTagName('body')[0]
var element = document.createElement('div')

element.setAttribute('class', 'quote-container')

fetch(api_url).then((response) => response.json()).then(data => {
    element.textContent = `${data.content} --- ${data.author}`
    body.appendChild(element)
})