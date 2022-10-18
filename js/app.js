const btnAddTarefa = document.querySelector("#add_tarefa")
const listaAFazer = document.querySelector("#a-fazer")
const listaFeito = document.querySelector("#feito")

const adicionarTarefa = function(ev) {
    ev.preventDefault()
    const tarefa = document.querySelector("#tarefa").value
    
    if (tarefa.length < 1) {
        return;
    }
    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa
    listaAFazer.appendChild(novaTarefa)
}

const moverParaFeito = function(ev) {
    const tarefa = ev.target.innerText
    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa
    listaFeito.appendChild(novaTarefa)
    listaAFazer.removeChild(ev.target)
}

btnAddTarefa.addEventListener("click", adicionarTarefa)
listaAFazer.addEventListener("click", moverParaFeito)