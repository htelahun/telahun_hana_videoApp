(() => {

  let getButton = document.querySelectorAll('.getButton');

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



getButton.forEach(button => button.addEventListener('click',getData));

})();
