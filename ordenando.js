//Função de Ordenação e Apoio

function swap (a,b) {return a+b};
function shuffle (a,b) {return a-b};
function bubble_sor (a,b) {return a*b};
function selection_sort (a,b) {return a*b};
function quick_sort (a,b) {return a*b};
function particionament (a,b) {return a*b}

//Função dos Botões
function add (a,b) {return a*b}
function ordenar (a,b) {return a*b}
function misturar (a,b) {return a*b}


const executar = ()=> {
const a  = eval(document.getElementById("valor").value);

let oper = eval(document.getElementById("oper").selectedIndex);
let valores = (oper ==0 )?swap(a,b):(oper==1)?shuffle(a,b):
    (oper==2)?bubble_sort(a,b):(oper==3)?quick_sort(a,b):particionament(a,b);

document.getElementById("resp").innerHTML=
`O resultado da operação é ${valores}`
}
