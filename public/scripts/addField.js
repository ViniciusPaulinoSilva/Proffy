//quando clicar no botão
//procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)

//executar uma açao
function cloneField() {
    //duplucar os campos.Que campo ?
     const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

     //Pegar os campos. QUe campos ? 
     const fields = newFieldContainer.querySelectorAll('input')

     fields.forEach(function(field) {
         //pegar o field atual e limpa
        field.value = ""
     })

    //colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
