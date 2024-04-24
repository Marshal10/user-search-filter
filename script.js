const result=document.getElementById('result')
const searchInput=document.getElementById('filter')

const listItems=[]

function updateDom(users){
    result.innerHTML=''
    users.forEach((user)=>{
        const listItem=document.createElement('li')
        listItem.innerHTML=`
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `
        listItems.push(listItem)
        result.appendChild(listItem)
    })
}

async function getUsers(){
    const res=await fetch("https://randomuser.me/api?results=50")
    const {results}=await res.json()

    updateDom(results)
}

function searchUser(searchTerm){
    listItems.forEach(item=>{
        let name=item.children[1].children[0].innerText.toLowerCase()
        if (name.includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}

searchInput.addEventListener('input',(e)=>{
    searchUser(e.target.value)
})

getUsers()