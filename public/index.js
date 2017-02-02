/*global Mustache */
'use strict';

var DRIVY = DRIVY || {};

(function starter () {
	var render = function render (actors) {
    var template = document.querySelector('#template').innerHTML;

    Mustache.parse(template);   // optional, speeds up future uses

    var rendered = Mustache.render(template, {'actors': actors});

    document.querySelector('#actors').innerHTML = rendered;
  };

  var button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    var car = DRIVY.getCar();
    var begin = document.querySelector('.begin').value;
    var end = document.querySelector('.end').value;
    var distance = document.querySelector('.distance').value;
    var option = document.querySelector('.option').checked;
	
	document.querySelector('#car1 .debut').value = document.querySelector('.begin').value;
	document.querySelector('#car1 .fin').value = document.querySelector('.end').value;
	document.querySelector('#car1 .distance1').value = document.querySelector('#car .distance').value
	
	var begin1 = new Date(begin).getTime();
    var end1 = new Date(end).getTime();
	var nbdejour = Math.floor(((end1 - begin1) / (1000 * 60 * 60 * 24)) + 1);
    document.querySelector('#car1 .jour').value = nbdejour +"j";
	
	//document.querySelector('#car1 .total_jour').value = nbdejour * document.querySelector('#car1 .price-by-day1').value;
	//document.querySelector('#car1 .total_km').value =  document.querySelector('#car .distance').value * document.querySelector('#car1 .price-by-km1').value; 
	
	
    var actors = DRIVY.payActors(car, begin, end, distance, option);
    //render(actors);
	
	
	for(var i =0; i<actors.length; i++)
	{
		if(actors[i].who == 'owner')
		{
			document.querySelector('#car1 .owner').value = actors[i].amount;		
		}
		else if(actors[i].who == 'insurance')
		{
			document.querySelector('#car1 .insurance').value = actors[i].amount;
		}
		else if(actors[i].who == 'assistance')
		{
			document.querySelector('#car1 .assistance').value = actors[i].amount;
		}
		else if(actors[i].who == 'drivy')
		{
			document.querySelector('#car1 .drivy').value = actors[i].amount;
		}
		else if(actors[i].who == 'driver')
		{
			document.querySelector('#car1 .driver').value = actors[i].amount;
		}
	}
    return;
  });
}());
