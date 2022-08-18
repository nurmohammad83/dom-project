document.getElementById('calculate').addEventListener('click', function(){

    let bill = document.getElementById('billAmount');
    const billAmount=bill.value
    let service = document.getElementById('serviceQuality');
    const serviceQuality = service.value
    let People = document.getElementById('totalPeople');
    const totalPeople= People.value
    

    if ( billAmount === '' || serviceQuality === 0){
        alert('please enter a number')
        return;
    }if(totalPeople == 0 || totalPeople <=1){
        totalPeople=1
        document.getElementById('each').style.display='none'
    }else{document.getElementById('each').style.display='block'}

    let total = (billAmount * serviceQuality)/totalPeople;
    total=Math.round(total*100)/100;
    total=total.toFixed(2)
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
})

document.getElementById('totalTip').style.display='none'
document.getElementById('each').style.display='none'

