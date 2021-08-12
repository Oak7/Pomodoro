window.addEventListener("load", () => {
    const botao = document.getElementById("botao");
    const botao2 = document.getElementById("botao2");
    
    botao2.addEventListener("click",() => {
        let sec = 300;
        
    const countDiv = document.getElementById("timer");
    
    const secpassPausa = () => {
      
        let min = Math.floor(sec/60);
        let segundosRestantes = sec % 60;
    
        if (segundosRestantes < 10) {
            segundosRestantes = "0" + segundosRestantes;
        }
    
        if (min < 10) {
            min = "0" + min;
        }
    
        // Vai gerar o formato de 02:59
        countDiv.innerHTML = min + ":" + segundosRestantes;
    
        // Condicao final
        if (sec > 0) {
            sec = sec - 1;
        }
        else {
            countDiv.innerHTML = "Pausa de 5 minutos!";
        }
    
    };
    
    const countDown = setInterval(() => secpassPausa(), 1000);
    

    });
    botao.addEventListener("click",() => {
    // window.addEventListener("load", () => {
    
    // Tempo, em segundos, que queremos.
    let sec = 1500;
    
    const countDiv = document.getElementById("timer");
    
    const secpass = () => {
    
        let min = Math.floor(sec/60);
        let segundosRestantes = sec % 60;
    
        if (segundosRestantes < 10) {
            segundosRestantes = "0" + segundosRestantes;
        }
    
        if (min < 10) {
            min = "0" + min;
        }
    
        // Vai gerar o formato de 02:59
        countDiv.innerHTML = min + ":" + segundosRestantes;
    
        // Condicao final
        if (sec > 0) {
            sec = sec - 1;
        }
        else {
            countDiv.innerHTML = "Pausa de 5 minutos!";
        }
    
    };
    
    const countDown = setInterval(() => secpass(), 1000);
    
    });
})

