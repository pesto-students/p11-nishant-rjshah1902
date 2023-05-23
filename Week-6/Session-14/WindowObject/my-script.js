function displayWindowProperties(){

    let userAgentValue = window.navigator.userAgent;

    console.log(userAgentValue);

    let currentWidth = window.screen.width;

    console.log(currentWidth);
    
    let currentheight = window.screen.height;

    console.log(currentheight);
    
    let currentpathname = window.location.pathname;

    console.log(currentpathname);
    
    let currenthref = window.location.href;

    console.log(currenthref);
    
    let storage = window.sessionStorage;

    console.log(storage);
    
    let local = window.localStorage;

    console.log(local);

}