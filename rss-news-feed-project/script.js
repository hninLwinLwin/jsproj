let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
const textarea = document.querySelector('#feed-textarea> ul')

const date = new Date()
document.querySelector('#date').innerHTML = date.toDateString();

feednami.load(url)
  .then(feed=>{
    textarea.value = ''
    console.log(feed)
    for(let entry of feed.entries){
      let li = document.createElement('li')
      li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`
      textarea.appendChild(li)
    }
  })

  //Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami

//Feeds from BBC News
//https://www.bbc.com/news/10628494#userss
