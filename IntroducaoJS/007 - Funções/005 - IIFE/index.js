// IIFE = Immediately Invoked Function Expression
// IIFE = Expressão de função invocada imediatamente

// Auto invoca ao carregar a página do navegador
(function () {}) ();
(function () {
    console.log("Teste");
}) ();

(() => {}) ();

((win, doc) => {
    console.log(win);
    console.log(doc);
}) (window, document);

// Precisa ser chamada
function consol(con) {
    return console.log(con);
}

consol("Guilherme");