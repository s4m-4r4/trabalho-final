function gerenciarAltoContraste() {
    console.log("funcao gerenciar alto contraste");

    var corAtual, elementoH1, elementoBody;
    var apresentacao1, apresentacao2, apresentacao3, apresentacao4, apresentacao5, apresentacao6, apresentacao7,apresentacao8,apresentacao9,apresentacao10;

    // buscando elemento body da pagina
    // elemento na primeira posicao da lista (body so tem um)
    elementoBody = document.getElementsByTagName("body")[0];
    elementoH1 = document.getElementsByTagName("h1");
    apresentacao1 = document.getElementById("apresentacao1");
    apresentacao2 = document.getElementById("apresentacao2");
    apresentacao3 = document.getElementById("apresentacao3");
    apresentacao4 = document.getElementById("apresentacao4");
    apresentacao5 = document.getElementById("apresentacao5");
    apresentacao6 = document.getElementById("apresentacao6");
    apresentacao7 = document.getElementById("apresentacao7");
    apresentacao8 = document.getElementById("apresentacao8");
    apresentacao9 = document.getElementById("apresentacao9");
    apresentacao10 = document.getElementById("apresentacao10");
    corAtual = elementoBody.style.backgroundColor;

    console.log("cor atual: " + corAtual);

    if (corAtual == "black") { // esta com fundo preto, ou seja, alto contraste
        elementoBody.style.backgroundImage = "none";
        elementoBody.style.backgroundColor = "white"; // cor de fundo branca
        elementoBody.style.color = "black";
        apresentacao1.style.backgroundColor = "white";
        apresentacao2.style.backgroundColor = "white";
        apresentacao3.style.backgroundColor = "white";
        apresentacao4.style.backgroundColor = "white";
        apresentacao5.style.backgroundColor = "white";
        apresentacao6.style.backgroundColor = "white";
        apresentacao7.style.backgroundColor = "white";
        apresentacao8.style.backgroundColor = "white";
        apresentacao9.style.backgroundColor = "white";
        apresentacao10.style.backgroundColor = "white";
    } else {
        elementoBody.style.backgroundImage = "none";
        elementoBody.style.backgroundColor = "black";    // cor de fundo preta
        elementoBody.style.color = "white";

        apresentacao1.style.backgroundColor = "black";
        apresentacao2.style.backgroundColor = "black";
        apresentacao3.style.backgroundColor = "black";
        apresentacao4.style.backgroundColor = "black";
        apresentacao5.style.backgroundColor = "black";
        apresentacao6.style.backgroundColor = "black";
        apresentacao7.style.backgroundColor = "black";
        apresentacao8.style.backgroundColor = "black";
        apresentacao9.style.backgroundColor = "black";
        apresentacao10.style.backgroundColor = "black";

    }


}

function ativarExtra() {
    console.log("funcao ativar extra");

    var body = document.getElementsByTagName("body")[0];

    var apresentacao1 = document.getElementById("apresentacao1");
    var apresentacao2 = document.getElementById("apresentacao2");
    var apresentacao3 = document.getElementById("apresentacao3");
    var apresentacao4 = document.getElementById("apresentacao4");
    var apresentacao5 = document.getElementById("apresentacao5");
    var apresentacao6 = document.getElementById("apresentacao6");
    var apresentacao7 = document.getElementById("apresentacao7");
    var apresentacao8 = document.getElementById("apresentacao8");
    var apresentacao9 = document.getElementById("apresentacao9");
    var apresentacao10 = document.getElementById("apresentacao10");

    body.style.backgroundImage = "url(imagens/fundo2.jpg)";
    body.style.backgroundColor = "gray";
    body.style.color = "purple";
    

    apresentacao1.style.backgroundColor = "gray";
    apresentacao2.style.backgroundColor = "gray";
    apresentacao3.style.backgroundColor = "gray";
    apresentacao4.style.backgroundColor = "gray";
    apresentacao5.style.backgroundColor = "gray";
    apresentacao6.style.backgroundColor = "gray";
    apresentacao7.style.backgroundColor = "gray";
    apresentacao8.style.backgroundColor = "gray";
    apresentacao9.style.backgroundColor = "gray";
    apresentacao10.style.backgroundColor = "gray";

}

function voltarNormal() {
    console.log("funcao gerenciar alto contraste");

    var body = document.getElementsByTagName("body")[0];
    var apresentacao1 = document.getElementById("apresentacao1");
    var apresentacao2 = document.getElementById("apresentacao2");
    var apresentacao3 = document.getElementById("apresentacao3");
    var apresentacao4 = document.getElementById("apresentacao4");
    var apresentacao5 = document.getElementById("apresentacao5");
    var apresentacao6 = document.getElementById("apresentacao6");
    var apresentacao7 = document.getElementById("apresentacao7");
    var apresentacao8 = document.getElementById("apresentacao8");
    var apresentacao9 = document.getElementById("apresentacao9");
    var apresentacao10 = document.getElementById("apresentacao10");

    body.style.backgroundImage = "url(imagens/fundo.jpg)";
    body.style.color = "black";

    apresentacao1.style.backgroundColor = "#f7f7f7";
    apresentacao2.style.backgroundColor = "#f7f7f7";
    apresentacao3.style.backgroundColor = "#f7f7f7";
    apresentacao4.style.backgroundColor = "#f7f7f7";
    apresentacao5.style.backgroundColor = "#f7f7f7";
    apresentacao6.style.backgroundColor = "#f7f7f7";
    apresentacao7.style.backgroundColor = "#f7f7f7";
    apresentacao8.style.backgroundColor = "#f7f7f7";
    apresentacao9.style.backgroundColor = "#f7f7f7";
    apresentacao10.style.backgroundColor = "#f7f7f7";

}

// documento carregado <-> void main(){ .....
/* window.onload garante que a pagina sera carregada
no browser do cliente, e apos o carregamento, pode-se
   definir os scripts que serao executados  */
window.onload = function () {
    console.log("Entrou no window onload..funcionou o JS");
    //alert("Funcionou o javascript");


    // vincular, associar (bind, trigger, listener)
    document.getElementById("opAltoContraste").addEventListener("click", gerenciarAltoContraste);
    document.getElementById("opExtra").addEventListener("click", ativarExtra);
    document.getElementById("opNormal").addEventListener("click", voltarNormal);



}








