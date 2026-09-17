import {test, expect} from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com'

test('Método POST para criar um post', async () => {
    const res = await fetch(`${BASE_URL}/posts`, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: 'Meu novo post',
            body: 'Conteúdo do meu novo post'
        })
    })
    //Testa statys code
    expect(res.status).toBe(201);
    //Testa se o objeto é um retorno JSON
    const dados = await res.json();
    expect(dados.title).toBe('Meu novo post');
    expect(dados.body).toBe('Conteúdo do meu novo post')
})

test('Método PUT para EDITAR um post completo', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: 'Meu novo post editado',
            body: 'Conteúdo do meu novo post editado'
        })
    })
    //Testa status code
    expect(res.status).toBe(200);
    //Testa se o objeto é um retorno JSON
    const dados = await res.json();
    expect(dados.title).toBe('Meu novo post editado');
    expect(dados.body).toBe('Conteúdo do meu novo post editado')
})

test('Método PATCH para EDITAR um post completo', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: 'Meu novo post com título editado',
        })
    })
    //Testa statys code
    expect(res.status).toBe(200);
    //Testa se o objeto é um retorno JSON
    const dados = await res.json();
    expect(dados.title).toBe('Meu novo post com título editado');
})