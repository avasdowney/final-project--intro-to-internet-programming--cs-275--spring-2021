window.onload = () => {

	var diamond =  ``;
    let diamondDiameter = parseInt(prompt(`Enter the radius of the diamond: `, `5`));

    // creates the diamond shape
    function createDiamond(diameter) {
        // bottom half
        for(var row=1; row<=diameter; row++) {
	        for(var col=1; col<=2*row-1; col++) {
	            diamond += `*`;
	        }
	        diamond += '<br>';
	    } 
        // top half
	    for(var row=diameter; row>=1; row--) {
	        for(var col=2; col<2*row-1; col++) {
	            diamond += `*`;
	        }
	        diamond += '<br>';
	    } 
		// print full diamond
		document.querySelector(`div`).innerHTML = diamond;
    };

	// call function to create diamond
    createDiamond(diamondDiameter);

};
