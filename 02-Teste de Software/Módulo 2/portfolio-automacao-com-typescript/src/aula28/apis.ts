const BASE_URL = 'https://jsonplaceholder.typicode.com'

// Definindo contratos de tipo
type Post = {
    userId: number;
    id?: number; // campo opcional
    title: string;
    body: string;
};

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

// 1. GET /posts
async function listarPosts() {
    console.log(`--- 1. GET /posts ---`)
    const res = await fetch(`${BASE_URL}/posts`);
    const dados: Post[] = await res.json();
    console.log(`Status: ${res.status}`)
    console.log(`Lidos: ${dados.length} posts.\nEx: do primeiro:`, dados[0].title)
}

// 2. GET /posts/:id
async function buscarPorId(id: number) {
    console.log(`\n--- 2. GET /posts/${id} ---`)
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    const dados: Post = await res.json();
    console.log(`Status: ${res.status}`)
    console.log(`Título do post ${id}:`, dados.title)
}

// 3. GET /posts/:id/comments
async function listarComment(postId: number) {
    console.log(`\n--- 3. GET /posts/${postId}/comments ---`)
    const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    const dados: Comment[] = await res.json(); 
    console.log(`O post ${postId} tem ${dados.length} comentários.`)
    console.log(`E-mail do primeiro comentário: ${dados[0].email}`)
}

// 4. POST /posts
async function criarPost(postParaCriar: Post) {
    console.log(`\n--- 4. POST /posts ---`)
    const res = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(postParaCriar),
    });

    const dados: Post = await res.json();
    console.log(`Status: ${res.status} (Criado com sucesso!)`)
    console.log(`ID gerado pelo servidor: ${dados.id}`)
    console.log(`Título do post criado: ${dados.title}`)
}

// Executando todas as requisições em sequência
async function chamarReqs(){
    await listarPosts();
    await buscarPorId(35);
    await listarComment(35);

    const novoPost: Post = {
        userId: 1,
        title: 'Aprendendo TypeScript e Fetch',
        body: 'O método POST envia dados para o servidor!'
    };

    await criarPost(novoPost);
}
    
chamarReqs();