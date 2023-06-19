function verificar(){
    var txtf = document.getElementById('txtf')
    var res = document.getElementById('res')
    if(txtf.value.length == 0){
        alert('[ERRO] Digite uma placa válida!')
        txtf.focus()
    }else{
        if(Number(txtf.value) == 00 || Number(txtf.value) == 10 || Number(txtf.value) == 20 || Number(txtf.value) == 30 || Number(txtf.value) == 40){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>01/02/2022 à 15/02/2022</strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 50 || Number(txtf.value) == 60 || Number(txtf.value) == 70 || Number(txtf.value) == 80 || Number(txtf.value) == 90){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>16/02/2022 à 04/03/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 01 || Number(txtf.value) == 11 || Number(txtf.value) == 21 || Number(txtf.value) == 31 || Number(txtf.value) == 41){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>07/03/2022 à 21/03/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 51 || Number(txtf.value) == 61 || Number(txtf.value) == 71 || Number(txtf.value) == 81 || Number(txtf.value) == 91){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>22/03/2022 à 04/04/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 02 || Number(txtf.value) == 12 || Number(txtf.value) == 22 || Number(txtf.value) == 32 || Number(txtf.value) == 42){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>05/04/2022 à 20/04/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 52 || Number(txtf.value) == 62 || Number(txtf.value) == 72 || Number(txtf.value) == 82 || Number(txtf.value) == 92){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>25/04/2022 à 09/05/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 03 || Number(txtf.value) == 13 || Number(txtf.value) == 23 || Number(txtf.value) == 33 || Number(txtf.value) == 43){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>10/05/2022 à 23/05/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 53 || Number(txtf.value) == 63 || Number(txtf.value) == 73 || Number(txtf.value) == 83 || Number(txtf.value) == 93){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>24/05/2022 à 06/06/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 04 || Number(txtf.value) == 14 || Number(txtf.value) == 24 || Number(txtf.value) == 34 || Number(txtf.value) == 44){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>07/06/2022 à 23/06/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 54 || Number(txtf.value) == 64 || Number(txtf.value) == 74 || Number(txtf.value) == 84 || Number(txtf.value) == 94){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>24/06/2022 à 07/07/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 05 || Number(txtf.value) == 15 || Number(txtf.value) == 25 || Number(txtf.value) == 35 || Number(txtf.value) == 45){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>08/07/2022 à 22/07/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 55 || Number(txtf.value) == 65 || Number(txtf.value) == 75 || Number(txtf.value) == 85 || Number(txtf.value) == 95){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>25/07/2022 à 05/08/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 06 || Number(txtf.value) == 16 || Number(txtf.value) == 26 || Number(txtf.value) == 36 || Number(txtf.value) == 46){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>08/08/2022 à 22/08/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 56 || Number(txtf.value) == 66 || Number(txtf.value) == 76 || Number(txtf.value) == 86 || Number(txtf.value) == 96){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>23/08/2022 à 06/09/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 07 || Number(txtf.value) == 17 || Number(txtf.value) == 27 || Number(txtf.value) == 37 || Number(txtf.value) == 47){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>08/09/2022 à 22/09/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 57 || Number(txtf.value) == 67 || Number(txtf.value) == 77 || Number(txtf.value) == 87 || Number(txtf.value) == 97){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>23/09/2022 à 06/10/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 08 || Number(txtf.value) == 18 || Number(txtf.value) == 28 || Number(txtf.value) == 38 || Number(txtf.value) == 48){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>07/10/2022 à 24/10/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 58 || Number(txtf.value) == 68 || Number(txtf.value) == 78 || Number(txtf.value) == 88 || Number(txtf.value) == 98){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>25/10/2022 à 09/11/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 09 || Number(txtf.value) == 19 || Number(txtf.value) == 29 || Number(txtf.value) == 39 || Number(txtf.value) == 49){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>10/11/2022 à 25/11/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
        if(Number(txtf.value) == 59 || Number(txtf.value) == 69 || Number(txtf.value) == 79 || Number(txtf.value) == 89 || Number(txtf.value) == 99){
            res.innerHTML = `Seu final de placa é <strong>${txtf.value}</strong> e suas datas iniciais e finais são respectivamente: <strong>28/11/2022 à 09/12/2022 </strong>`
            res.innerHTML += '<br>Entre em contato conosco para maiores informações'
        }
    }
}
    
