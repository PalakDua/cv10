const bar=document.querySelector('.bar');
const cross=document.querySelector('.cross');
const content=document.querySelector('.content');

$(document).ready(function(){
	$('.bar').click(function(){
	$('.content').toggle(300);
	});	
	$('.cross').click(function(){
	$('.content').toggle(300);
	});	
});
