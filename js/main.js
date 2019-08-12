(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");
    var teams = document.querySelectorAll('.imgContainer');
    var bannerImages = document.querySelector('#goodsImages');
    var goodsName = document.querySelector("#goodsTitle");
    var goodsInfo = document.querySelector(".goods-info");


    var goodsData = [ 
        ["Goods No.1", `More information of the goods no1.`],
        ["Goods No.2", `More information of the goods no2`],
        ["Goods No.3", `More information of the goods no3`],
        ["Goods No.4", `More information of the goods no4`],
    ];


	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
    }

    function animateBanner() {

        let offset = 600,
            multiplier = this.dataset.offset; 

        console.log((offset * multiplier) + "px");


        bannerImages.style.right = `${offset * multiplier + "px"}`;

        goodsName.textContent = `${goodsData[multiplier][0]}`;
        goodsInfo.textContent = goodsData[multiplier][1]; 
    }


    teams.forEach(team => team.addEventListener("click", animateBanner));
	button.addEventListener("click", hamburgerMenu, false);
	

})();