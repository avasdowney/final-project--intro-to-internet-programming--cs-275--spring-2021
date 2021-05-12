window.onload = () => {

	let diamond =  ``;
    let diamondDiameter = parseInt(prompt(`Enter the radius of the diamond: `, `5`));
	let div = document.querySelector(`div`);
		

    // creates the diamond shape
    let createDiamond = (diameter) => {
        // bottom half
        for(let row=1; row<=diameter; row++) {
	        for(let col=1; col<=2*row-1; col++) {
	            diamond += `*`;
	        }
	        diamond += '<br>';
	    } 
        // top half
	    for(let row=diameter; row>=1; row--) {
	        for(let col=2; col<2*row-1; col++) {
	            diamond += `*`;
	        }
	        diamond += '<br>';
	    } 
		// print full diamond
		div.innerHTML = diamond;
    }; 
	createDiamond(diamondDiameter);
};
