function main(){
    const root = document.getElementById('root')
    const output = document.getElementById('output')
    
    document.getElementById('change-btn').addEventListener('click', function(){
        const bgColor = genaroteHEXColor();
        root.style.backgroundColor=bgColor;
        output.value = bgColor;
        document.getElementById('copy-btn').addEventListener('click'),function(){
            navigator.clipboard.writeText(output.value)
        }
        
    })
}


function genaroteHEXColor(){
    const red = Math.floor(Math.random()* 255);
    const green = Math.floor(Math.random()* 255);
    const blue= Math.floor(Math.random()* 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}