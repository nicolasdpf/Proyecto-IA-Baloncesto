let consultado = true;
btnAtaque1.addEventListener("click", ejecutarAtq1);
btnAtaque2.addEventListener("click", ejecutarAtq2);
btnAtaque3.addEventListener("click", ejecutarAtq3);
btnAtaque4.addEventListener("click", ejecutarAtq4);

/**
 * Funciones
 */
function ejecutarAtq1(){
    madeProcess("ataque1");
}

function ejecutarAtq2(){
    madeProcess("ataque2");
}

function ejecutarAtq3(){
    madeProcess("ataque3");
}

function ejecutarAtq4(){
    madeProcess("ataque4");
}


function madeProcess(ataque){
    
    if(consultado == false){
        ventanaresultads.style.display = 'none';
    }
    let def1 = calcularProbCondicinal(ataque, "defensa1");
    let def2 = calcularProbCondicinal(ataque, "defensa2");
    let def3 = calcularProbCondicinal(ataque, "defensa3");
    let def4 = calcularProbCondicinal(ataque, "defensa4");

    let temp = [];

    temp.push(def1);
    temp.push(def2);
    temp.push(def3);
    temp.push(def4);
    
    temp.sort();

    let mayor = temp.pop();

    if(def1 === mayor){
        defensaResult.innerHTML = "Defensa 1";
        porcentajeResult.innerHTML = def1 + "%";
    }else if( def2 === mayor){
        defensaResult.innerHTML = "Defensa 2";
        porcentajeResult.innerHTML = def2 + "%";
    }else if( def3 === mayor){
        defensaResult.innerHTML = "Defensa 3";
        porcentajeResult.innerHTML = def3 + "%";
    } else if(def4 === mayor){
        defensaResult.innerHTML = "Defensa 4";
        porcentajeResult.innerHTML = def4 + "%";
    }
    console.log(temp);
    console.log(mayor);

    mostrarspinner('block');
    setTimeout(() => {
        ventanaresultads.style.display = 'flex';
        mostrarspinner('none');
        consultado = false;
    }, 3000);
}


function mostrarspinner(vista){
    let spinner = document.querySelector(".contspinner");
    spinner.style.display = vista;
}