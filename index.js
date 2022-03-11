let live=6;
let game=0;
let a= "c";
let b= "o";
let c= "d";
let d= "e";
let e= "r";
alert("Hola... vamos a jugar al ahorcado");
alert("tienes " + live + " oportunidades para descubrir al palabra");

while(live>1 && game<5){
    console.log(game);
    console.log(live);
    
    let text = prompt("Elija una letra por favor...");
    console.log(text);
    switch(text){
        case a:
            alert("correcto es la leta c");
            a="-";
            game++;
            break;

        case b:
            alert("correcto es la leta o");
            b="-";
            game++;
            break;

        case c:
            alert("correcto es la leta d");
            c="-";
            game++;
            break;

        case d:
            alert("correcto es la leta e");
            d="-";
            game++;
            break;
        
        case e:
            alert("correcto es la leta r");
            e="-";
            game++;
            break;
        
        default:
            live--;
            alert("letra incorrecta te quedan " +live+ " intentos" );
            break;
            
    }
}
if(game>=5){
    alert("Felicidades descubriste la palabra");
}
else{
    alert("lo siento perdiste");
}
