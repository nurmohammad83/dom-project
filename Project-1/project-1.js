
function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn').addEventListener('click',function(){
        const bgRgb = generoterRgbColor();
        root.style.backgroundColor=bgRgb;
        
    })
}


function generoterRgbColor(){   
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue= Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}