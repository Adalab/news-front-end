var oReq = new XMLHttpRequest()
oReq.addEventListener("load", reqListener)
oReq.open("GET", "https://raw.githubusercontent.com/rladies/news/master/public/demo.json")
oReq.send()

// var title = document.getElementById('followers')
// var sentimiento = document.getElementById('followers')
// var visitasLabel = document.getElementById('followers')

// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }

function reqListener () {
  var data = JSON.parse(this.responseText)
  var texthtml = ""
  for (var i = 0; i < data.length; i++) {
  	texthtml = texthtml + "<h1> "+ data[i].titulo +" </h1>"
  	texthtml = texthtml + "<p> "+ data[i].texto_noticia +" </p>"
  	texthtml = texthtml + "<p> "+ data[i].sentimiento +" </p>"
  	texthtml = texthtml + "<p> "+ data[i].visitas +" </p>"
  }
  document.getElementById('wrapper').innerHTML= texthtml


  //followersLabel.innerHTML = data.followers
}

