console.log('Export from View');
export function nightMode(color1,color2) {
	document.body.style.backgroundColor = color1;
	document.querySelector('.char-count').style.color = color2;
	document.querySelector('.small-title').style.color =color2;
	document.querySelector('.footer').style.color = color2;
	document.querySelector('.day').style.color = color2;
	document.querySelector('.night').style.color = color2;

}