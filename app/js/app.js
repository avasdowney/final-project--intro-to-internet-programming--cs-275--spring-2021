window.onload = () => {

    let diamond =  ``;
    let diamondDiameter = parseInt(prompt(`Enter the radius of the diamond: `, `5`));
    let div = document.querySelector(`div`);
		

    // creates the odd diamond shape
    let createOddDiamond = (diameter) => {
        // top half
        for(let row=1; row<=diameter; row++) {
            for(let col=1; col<=2*row-1; col++) {
                diamond += `*`;
            }
            diamond += `<br>`;
        } 
        // bottom half
        for(let row=diameter; row>=1; row--) {
            for(let col=2; col<2*row-1; col++) {
                diamond += `*`;
            }
            diamond += `<br>`;
        } 
        diamond += `<br>`;
        // print full diamond
        div.innerHTML = diamond;
    }; 

    // creates the even diamond shape
    let createEvenDiamond = (diameter) => {
        // top half
        diamond += `*`;
        for(let row=1; row<=diameter; row++) {
            for(let col=1; col<=2*(row-1); col++) {
                diamond += `*`;
            } 
            diamond += `<br>`;
        } 
        // bottom half
        for(let row=diameter; row>1; row--) {
            for(let col=2; col<2*(row-1); col++) {
                diamond += `*`;
            }
            diamond += `<br>`;
        }
        diamond += `*`;
        // print full diamond
        div.innerHTML = diamond;
    };
	
    let xPos = 0; // start position
    let speed = 10; // ticks
    let direction = 1; // move right initially

    let moveDiamond = () => {
        let diamondWidth = div.clientWidth;
        let viewport = window.innerWidth;
        xPos += (direction*speed);

        if(direction === 1 && (xPos+diamondWidth >= viewport)) // move left to edge
            direction = -1;
        else if (direction === -1 && xPos<=0) // move right to edge
            direction = 1;

        document.querySelector(`div`).style.left = xPos + `px`;
    };

    let chooseDiamond = () => {
        if (diamondDiameter % 2 === 0) {
            createEvenDiamond(diamondDiameter);
        } else {
            createOddDiamond(diamondDiameter);
        }
    };
	
    chooseDiamond();
    // setInterval(moveDiamond,60);

};
