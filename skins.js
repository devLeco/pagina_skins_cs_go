function selectAk(){
    let valorAk=0; //valor do produto
    let imagem=""; //imagem do produto
    switch (document.getElementById("skin").value) {
    case "wastelandRebel":
        imagem = "img/ak47-wasteland_rebel.png";
        valorAk = Number(580.64);
        break;
    case "asiimov":
        imagem = "img/Asiimov.png";
        valorAk = 766.85;
        break;
    case "fuelInjector":
        imagem = "img/Fuel_Injector.png";
        valorAk = 663.71;
        break;
    case "neonRevolution":
        imagem = "img/Neon_revolution.png";
        valorAk = 248.82;
    break;
        case "neonRider":
        imagem = "img/Neon_Rider.png";
        valorAk = 394.14;
        break;
    case "theEmpress":
        imagem = "img/The_Empress.png";
        valorAk = 611.35;
        break;
    case "bloodSport":
        imagem = "img/Bloodsport.png";
        valorAk = 279.91;
        break;
    }
    document.getElementById("produto").src=imagem;
    document.getElementById("valorAk").innerHTML="R$ " + Number(valorAk);
    return valorAk;
}
function selectFaca(){
    let valorF=0; //valor do produto
    let imagemF=""; //imagem do produto
    switch (document.getElementById("skinF").value) {
    case "tigerTooth":
        imagemF = "img/tigertooth.png";
        valorF = 3324.13;
        break;
    case "doppler":
        imagemF = "img/doppler.png";
        valorF = 1029.60;
        break;
    case "marbleFade":
        imagemF = "img/marblefade.png";
        valorF = 4134.58;
        break;
    }
    document.getElementById("faca").src=imagemF;
    document.getElementById("valorF").innerHTML="R$ " + Number(valorF);
    return valorF;
}
function calculaValorFinal(){
    let valorFinal=Number(selectFaca() + selectAk()).toFixed(2);
    document.getElementById("precoFinal").innerHTML="R$ " + valorFinal;
}