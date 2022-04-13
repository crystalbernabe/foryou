window.addEventListener('load', () => {
    const btn = document.querySelector("#btn");
    const img = document.querySelector(".img-con");
    const s = document.querySelector(".stop");
    const stopBtn = document.querySelector("#stopbtn");
    var audio = document.querySelector('#audio');
    var count = 0;

    // alert
    const q = "Do you want to see what's inside?\n(Press \"Ok\" if you want \"Cancel\" if you don't)";

    
    if (confirm(q)==true) {
        // typing script
        var typed = new Typed(".typing", {
            strings: ["Maybe you are curious now what is this all about", "Well actually love", "this is my simple monthsary gift for you", "HAPPY 7TH MONTHSARY ALI💘", "But before I proceed to my main intention", "lemme show you something before you proceed to another platform", "ILOVEYOU MWUAHH", "Please play the video and the link after"],
            typeSpeed: 40,
            backSpeed: 50, 
            startDelay: 10000,
            loop: true
        });
        
        var typed = new Typed(".typing2", {
            strings: ["Hi Ali, it's nice to see you again here", "I HOPE YOU ARE DOING WELL", "HAVE A NICE DAY A HEAD MAHAL", "HAPPY MONTHSARY ALI💘"],
            typeSpeed: 50,
            backSpeed: 40,
            startDelay: 800,
            loop: false
        });
    
        // button show
        const myTimeout = setTimeout(showbtn, 16000);
        
        function showbtn() {
            if (btn.classList.contains("hide")) {
                btn.classList.add("show");
                btn.classList.remove("hide");
            } else{
                btn.classList.add("hide");
                btn.classList.remove("show");
            }
        }
        
        const hiding = {
            getPicShow(){
                if(btn.innerHTML === "Go Inside &#9658;"){
                    btn.innerHTML = "Hide Message &#9208;";
                } else{
                    btn.innerHTML = "Go Back &#9658;";
                }
        
                if (img.classList.contains("hide")) {
                    img.classList.add("show");
                    img.classList.remove("hide");
                } else{
                    img.classList.add("hide");
                    img.classList.remove("show");
                }
                
            },
            
            getAudio(){
                if(count == 0){
                    count = 1;
                    audio.play();
                    btn.innerHTML = "Go Back &#9208;";
                } else {
                    count = 0;
                    audio.pause();
                    btn.innerHTML = "Go Inside &#9658;";
                }
            }
        }
          
        // play or see message button
        btn.addEventListener('click', () => {
            btn.style.display="none";
            hiding.getPicShow();
            hiding.getBtnShow();
            hiding.getAudio();
            
            setInterval(() => {
                let random = Math.floor(Math.random() * 23);
                let url = images[random];

                if (mm.src == undefined) {
                    mm.src = "image/image1.jpeg";
                } else {
                    mm.src = url;
                    cover.style.backgroundImage = `url(${url})`;
                }
            }, 3000);

        });
        
    } else {
        document.querySelector(".msg").innerHTML = "<h4>Yah! why did you click cancel? You don't want to see what's inside baby? .</h4>";

        const Reload = document.querySelector("#Reload");
        if (Reload.classList.contains("hide")) {
           Reload.classList.add("show");
           Reload.classList.remove("hide");
        } else {
           Reload.classList.add("hide");
           Reload.classList.remove("show");
        }
        Reload.addEventListener("click", () => {
            location.reload();
        });
        return false;

    }
});