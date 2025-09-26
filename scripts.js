/*TODO-LIST*/
function addTarefa(){
    let tarefa = document.querySelector("input").value
    let li = document.createElement("li")

    li.innerHTML = tarefa + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)
    document.querySelector("input").value = ''
}

function deletarTarefa(li){
    li.parentElement.remove()
}

/*WHATSAPP*/
function enviarWhats(event) {
    event.preventDefault()


    let tarefas = document.getElementById('tarefas').value.trim();

    let itens = tarefas.split(',');

    let texto = itens.map((item, i)=> `${i+1}- ${item.trim()}`).join("\n");

    const nome = document.getElementById('nome').value.trim();

    let msgFormatada = `Olá ${nome}, aqui está sua Lista de Tarefas:\n${texto}`

    const result  = encodeURIComponent(msgFormatada);

    const telefone = document.getElementById('numTelefone').value.trim();

    const url = `https://wa.me/${telefone}/?text=${result}`

    window.open(url, '_blank')

}