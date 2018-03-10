(() => {

  let getButton = document.querySelectorAll('.getButton'),
      video = document.querySelector(".player");

  function getData (){
    //debugger;

    let url = `api/${this.id}`;

    fetch (url)
    .then((resp)=> resp.json())
    .then((data)=> {
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    });

    window.location.href= `/api/${this.id}`;
  }

  function fadeup() {
    //console.log('hit video');
    if(video.paused) {
      video.play();
      video.style.opacity = "1";
    }else{
      video.pause();
      video.style.opacity = ".2";
    }

  }

getButton.forEach(button => button.addEventListener('click',getData));

video.addEventListener('click', fadeup, false);

})();
