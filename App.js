// OGÓLNA FUNKCJA
var baseUrl = 'http://cors-anywhere.herokuapp.com/https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
   'X-Client-Id': '3811',
   'X-Auth-Token': 'd920201cc1a357f9462a0905844b39c2'
};

function setupColumns(columns) {
   columns.forEach(function (column) {
      var col = new Column(column.id, column.name);
   board.addColumn(col);
      setupColumns(col, column.cards);
   });
}

function setupCards(col, cards) {
   cards.forEach(function (card){
      var carObj = new Card(card.id, card.name);
      col.addCard(carObj);
   })
}

function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}