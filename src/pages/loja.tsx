import { useState, useEffect } from "react"

export default function Loja(){
    getProdutos();
    getCategorias();
    return(
        <h1>Teste</h1>
    )
}

export async function getCategorias() {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categorias = await res.json();
    console.log(categorias);
    return categorias;
}

export async function getProdutos() {
    const res = await fetch("https://fakestoreapi.com/products");
    const produtos = await res.json();
    console.log(produtos);
    return produtos;
}