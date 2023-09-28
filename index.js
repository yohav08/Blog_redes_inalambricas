
function conversor(){ 

    let numero = document.getElementById("numero").value;

    let seleccion = document.getElementById('unidad1');
    let seleccion1 = document.getElementById('unidad2');
    let tipo_unidad1 = document.getElementById('unidad1').value=seleccion.options[seleccion.selectedIndex].value;
    let tipo_unidad2 = document.getElementById('unidad2').value=seleccion1.options[seleccion1.selectedIndex].value;
    
    let resultado;

    if (tipo_unidad1 == tipo_unidad2){
        resultado = Number(numero);
    }
    //  DE DBM A DBK, DBW y WATTS
    else if(tipo_unidad1 == 'dbm' && tipo_unidad2 == 'dbk'){
        resultado = Number(numero)-60; 
    }else if(tipo_unidad1 == 'dbm' && tipo_unidad2 == 'dbw'){
        resultado = Number(numero)-30;
    }else if(tipo_unidad1 == 'dbm' && tipo_unidad2 == 'wt'){
        resultado = Math.pow(10, (Number(numero)-30)/10 );
    }
    //  DE DBK A DBM, DBW y WATTS
    else if(tipo_unidad1 == 'dbk' && tipo_unidad2 == 'dbm'){
        resultado = Number(numero)+60;
    }else if(tipo_unidad1 == 'dbk' && tipo_unidad2 == 'dbw'){
        resultado = Number(numero)+30;
    }else if(tipo_unidad1 == 'dbk' && tipo_unidad2 == 'wt'){
        resultado = Math.pow(10, (Number(numero)+30)/10 );
    }
    //  DE DBw A DBM, DBk  y WATTS
    else if(tipo_unidad1 == 'dbw' && tipo_unidad2 == 'dbm'){
        resultado = Number(numero)+30;
    }else if(tipo_unidad1 == 'dbw' && tipo_unidad2 == 'dbk'){
        resultado = Number(numero)-30;
    }else if(tipo_unidad1 == 'dbw' && tipo_unidad2 == 'wt'){
        resultado = Math.pow(10, Number(numero)/10 );
    }
    //  DE WATTS A DBM, DBk  y DBW
    else if(tipo_unidad1 == 'wt' && tipo_unidad2 == 'dbw'){
        resultado = 10*(Math.log10( Number(numero) ));
    }else if(tipo_unidad1 == 'wt' && tipo_unidad2 == 'dbm'){
        resultado = 10*(Math.log10( Number(numero)/0.001 ));
    }else if(tipo_unidad1 == 'wt' && tipo_unidad2 == 'dbk'){
        resultado = 10*(Math.log10( Number(numero)/1000 ));
    }
    //DESCARTE
    else {
        resultado = 'Ingrese un número';
    }

    // Mostramos el resultado en el campo de salida
    document.getElementById('resultado').innerHTML=resultado. toFixed(2);

}



function ruido_termico(){
    let temperatura = document.getElementById("temperatura").value;
    let ancho_banda = document.getElementById("ancho_banda").value;
    let resultado;

    //Calculamos el resultado del ruido térmico
    resultado = ((1.38 * Math.pow(10, -23 ))*(Number(temperatura))*(Number(ancho_banda)));

    //Convertimos el resultado en texto para realizar la notación científica
    let notacion = resultado.toExponential(2);
    let notacion1 = notacion.toString();

    // Mostramos el resultado en el campo de salida
    document.getElementById('ruido').innerHTML=resultado.toExponential(2);
    
    // Extraemos el exponente del resultado(en texto) teniendo en cuenta que puede ser de varias cifras
    let exponente='';
    for (var i=6; i<notacion1.length; i++){
        exponente+=notacion1[i];
    }
    // Mostramos el resultado en notación científica
    document.getElementById('notacion').innerHTML='En notación científica es: '+notacion1[0]+notacion1[1]+notacion1[2]+notacion1[3]+' * 10^'+exponente+' Watts';
}

function PIRE(){
    let transmisor = document.getElementById("transmisor").value;
    let perdida = document.getElementById("perdida").value;
    let ganancia = document.getElementById("ganancia").value;
    let resultado;

    resultado = Number(transmisor)-Number(perdida)+Number(ganancia);


    // Mostramos el resultado en el campo de salida
    document.getElementById('pire').innerHTML=resultado+'dBm';
    

}