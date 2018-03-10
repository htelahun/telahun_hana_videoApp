(() => {

  let getButton = document.querySelectorAll('.getButton');
  video = document.querySelector(".player");

  function getData (){
    //debugger;

    let url = `kidsMovies/${this.id}`;

    fetch (url)
    .then((resp)=> resp.json())
    .then((data)=> {
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    });

    window.location.href= `/kidsMovies/${this.id}`;
  }

  function fadeup() {
    //console.log('hit video');
    video.style.opacity = "1";
    if(video.paused) {
      video.play();
    }else{
      video.pause();
    }

  }


getButton.forEach(button => button.addEventListener('click',getData));
video.addEventListener('click', fadeup, false);
})();
