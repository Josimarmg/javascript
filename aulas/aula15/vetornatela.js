let valores = [8, 1, 7, 4, 2, 9]
/*
// Tradicional versão de percurso para exibição no vetor 
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
// Versão nova que é simplificada e otimizada de percurso para exibição no vetor
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}