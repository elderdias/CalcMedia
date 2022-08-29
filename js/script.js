const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {

    e.preventDefault();
    var aluno = document.querySelector("#aluno").value;
    var n1 = document.querySelector("#n1").value;
    var n2 = document.querySelector("#n2").value;
    var n3 = document.querySelector("#n3").value;
    var n4 = document.querySelector("#n4").value;
    var n5 = document.querySelector("#n5").value;
    var resultado = document.getElementById("resultado");


    if (n1 !== '' && n2 !== '' && n3 !== '' && n4 !== '' && n5 !== '') {
        var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5;
        resultado.textContent = ('A Média do(a) aluno(a) ' + aluno + ' é: ') + media;
    }
    else {
        alert('Preencha todos os valores.');
    }
});

      
