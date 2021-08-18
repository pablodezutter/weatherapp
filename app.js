window.addEventListener('Load', () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(postition);

        }

    } else {
       h1.textContent = 'Hey, this is not working cauz you have no gps' 
    }

})