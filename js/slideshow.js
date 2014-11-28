

		var Image = new Array("images/header_image_2.png", "images/header_img_5.jpg","images/header_img_4.jpg");
		var root_path = "";
		
		var Description = new Array ("Na te Ira Atua te manate mauri me te tapu o nga mea katoa. Ma te pono, te tika me te aroha e whakaahua te mana te mauri me te tapu o te tangata.  ", "We will help you to get better healthy life", "Wellcome to ORA TOA New Zealand");




        var h2 = new Array(" ORA TOA Mauri Ora","ORA TOA","ORA TOA");
		
		var Image_Number = 0;
		var Image_length = Image.length - 1;
		
		var slideShow_Timer; //defined the slideShow_Timer for play and stop();
		
		
	function change_image(num,speed , touch){
        //speed is for the fadein out as if we are swipping speed up
        clearTimeout(slideShow_Timer);

        var fadeSpeed   = (typeof speed == "string")? speed : "slow";

			Image_Number = Image_Number + num;
		if(Image_Number > Image_length){
			console.log("Restart slideshow");
			Image_Number = 0;
			
		}
	
		if(Image_Number < 0){
			console.log("At start");
			Image_Number =   Image.length - 1;
		}
		try{


            $("#slide_show img").fadeOut(900,function(){
                $("#slide_show img").attr("src",root_path + Image[Image_Number]);
                $("#slide_show img").fadeIn(50);
            })



            //$("#slide_show img").fadeIn(fadeSpeed - 5);
			//document.slideshow.src= Image[Image_Number];

            /*
            $("#descriptionh2").fadeOut(fadeSpeed,function(){
                $("#descriptionh2").html(h2[Image_Number]);
                $("#descriptionh2").fadeIn(fadeSpeed);
            })


            $("#description").fadeOut(fadeSpeed,function(){
                $("#description").html(Description[Image_Number]);
                $("#description").fadeIn(fadeSpeed);
            })
            */
            //document.getElementById("descriptionh2").innerHTML = h2[Image_Number];
		
		}catch(e){
            console.log("caught slideshow error -> ",e)
        }


        slideShow_Timer = setTimeout(function(){
            change_image(num)
        } ,6000);

		return false;
	}
	
	function play(){
		slideShow_Timer = setTimeout("change_image(1)" ,6000);
		
	}
	
	
	function stop(){
        clearTimeout(slideShow_Timer);
	}
	
	
	
    play();

   //swipe function
        var slideshow = document.getElementById("slide_show");


        var options = {
            dragLockToAxis: true,
            dragBlockHorizontal: true
        };


        var touchSwuipe = new Hammer(slideshow, options);

        touchSwuipe.on("dragleft dragright swipeleft swiperight", function(event){

            event.gesture.stopDetect();
            event.preventDefault();
            //console.log("Swipe left",ev);
            if (event.type.match(/dragleft|swipeleft/i)){
                console.log("swiping left");
                change_image(-1,"fast")
            }

            if (event.type.match(/dragright|swiperight/i)){
                console.log("swiping right");
                change_image(+1,"fast")
            }
            //console.log("event",event)

        });
        /*
        Hammer(slideshow).on("swipeleft", function() {

            console.log("Swipe left");
            change_image(-1)
        });


        Hammer(slideshow).on("swiperight", function() {

            console.log("Swipe right");
            change_image(+1)
        });

        */




