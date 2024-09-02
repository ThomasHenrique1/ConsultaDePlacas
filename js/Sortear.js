let vet = [];
let multi = 1;

$("#btn1").click(function() {
    vet = []; // Limpa o array a cada sorteio
    multi = 1; // Reseta o produto

    // Sorteia até 3 números
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 300) + 1;
        vet.push(num);
        if (num % 2 !== 0) {
            multi *= num;
        }
    }

    // Atualiza os resultados
    $("#resp1").html("Números Sorteados: " + vet.join(" - "));
    $("#resp2").html("Produto dos números ímpares: " + multi);
});
