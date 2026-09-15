const BASE_URL = 'https://jsonplaceholder.typicode.com/'

//Definindo contratos de tipo
type Post = {
    userId:number;
    id?:number; //campo opcional
    title:string;
    body:string;
};

type Comment = {
    postId:number;
    id:number;
    name:string;
    email:string;
    body:string;
};

//GET /posts

async function listarPosts() {
    console.log(`--- 1. GET /posts`)
    const res = await fetch(`${BASE_URL}/posts`);
    const dados: Post[] = await res.json();
    console.log(`Status: ${res.status}`)
    console.log(`Lidos: ${dados.length} posts.
Ex: do primeiro:`, dados[0].title)
}

async function chamarReqs(){
    listarPosts(); 
}
    
chamarReqs();