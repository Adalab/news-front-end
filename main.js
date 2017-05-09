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

function sentimentsToEmoji(sentiment){
  if (sentiment <0.2 ) {return ":("};
  if (sentiment <0.8) {return ":|"};
  return ":)"
}

function reqListener () {
  var data = JSON.parse(this.responseText)
  var texthtml = ""
  var titles=[]
  var numVis=[]
  for (var i = 0; i < data.length; i++) {
    titles.push(data[i].titulo +  sentimentsToEmoji(data[i].sentimiento));
    numVis.push(data[i].visitas);

  	texthtml = texthtml + "<h1> "+ data[i].titulo +" </h1>"
  	texthtml = texthtml + "<p> "+ data[i].texto_noticia +" </p>"
  	texthtml = texthtml + "<p> "+ data[i].sentimiento +" </p>"
  	texthtml = texthtml + "<p> "+ data[i].visitas +" </p>"
  }
  document.getElementById('wrapper').innerHTML= texthtml
  var ctx = document.getElementById("myChart");

var data = {
    labels: titles,
    datasets: [
        {
            label: "Visitas",

            borderWidth: 1,
            data: numVis,
        }
            ]
};
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data
    });

  //followersLabel.innerHTML = data.followers
}

