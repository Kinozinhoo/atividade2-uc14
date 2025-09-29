import React from "react";
import CardJogador from "./components/CardJogador";
import Fallen from "../src/assets/fallen.jpg"
import Titulo from "./components/Titulo";

// Função proincipal do App 
export default function App(){
    // Array de objetos respresentando os jogadores
    // Cada objeto tem id e as props nome, posicao, time, avaliacao e imagem
    const jogadores = [
        {
            id: 1,
            nome: "Ednaldo Pereira",
            posicao: "atacante",
            avaliacao: 100000000000,
            imagem: "https://akamai.sscdn.co/uploadfile/letras/fotos/c/4/e/9/c4e987143a79ddc7769d979b49d86456.jpg"
        },
        {
            id: 2,
            nome: "Prof Daniel",
            posicao: "Alfa",
            avaliacao: "♾️",
            imagem: "https://private-user-images.githubusercontent.com/92554228/485370968-cc593adc-9ee7-476e-a319-af9611cc933c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTkxODgyMjQsIm5iZiI6MTc1OTE4NzkyNCwicGF0aCI6Ii85MjU1NDIyOC80ODUzNzA5NjgtY2M1OTNhZGMtOWVlNy00NzZlLWEzMTktYWY5NjExY2M5MzNjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTI5VDIzMTg0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkyYjI4MzkxMjY4YjA3ODQwZjE2YTU1OWE5ZjQ3NTg4MTkyNDA1NTc1MmZiOTA4NzdmNWQyMzY0NjIzMmEzNWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.qdtsmDfUQCt3XjW_Awqk_UNXrR6IJMzX1cSG7KNqwuA"
        }
    ]
    return(
        <main
        style={{
            display: "flex",
            gap: "20px", // espaço entre os cards
            justifyContent: "center", // centraliza os cards na horizontal
            marginTop: "50px", // espaço superior
            flexWrap: "wrap" // permite a quebra de linha se a tela for pequena

        }}
        >
            {/** Componente de Titulo             
             */}
             <div style={{width: "100%"}}>
                <Titulo texto= "Lista de Jogadores" />
             </div>
             {/** Percorre o array de jogadores com .map */}
             {/** Para cada jogador cria um CardJogador  */}
             {
                jogadores.map((j) => (
                    // key é necessário para o React identificar cada item da lista
                    // {...j} espalhar todas as props (nome, posicao, time, avaliacao, imagem)
                    <CardJogador key={j.id}{...j} />
                ))
             }
            

        </main>
    )
}