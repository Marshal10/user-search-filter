const result=document.getElementById('result')
const searchInput=document.getElementById('filter')

const listItems=[]

async function getUsers(){
    const res=await fetch("https://randomuser.me/api?results=50")
    const {results}=await res.json()
    console.log(results)
}

getUsers()