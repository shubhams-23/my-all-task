function tablePrint(){ 
    let num =document.getElementById("numPrint").value;
    let pt =document.getElementById("pPrint");
    for(i=1;i<=10;i++){
        console.log(num*i);
        pt.innerHTML=num*i;
    }   
    }