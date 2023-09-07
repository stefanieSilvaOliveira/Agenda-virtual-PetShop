let input = document.querySelector(".input-main")
let p = document.querySelector("p")





const contacts = [
    { name: "Maria", number: "(11) 99239-5191"},
    { name: "José", number: "(11) 99191-2658"},
    { name: "Marcelina", number: "(11) 99185-3691"},
    { name: "Pedro", number: "(11) 99688-7612"},
    { name: "Antonio", number: "(11) 99146-8973"},
    { name: "Helena", number: "(11) 99875-2631"},

]

function search(){
    for(let i = 0; i < contacts.length ;i++){
         
        if(input.value.toLowerCase() === contacts[i].name.toLowerCase()){
        
           p.innerHTML = `Dono (a) do Pet encontrado Nome:${contacts[i].name} Tel:${contacts[i].number}`
        
           break
        } else {
            p.innerHTML = "Contato não encontrado,tente novamente"

        }
       
    }     
}

function remover(){

    
let input = document.querySelector(".input-main")
input.value="";

let p = document.querySelector("p")
p.innerHTML = "";

}




    


