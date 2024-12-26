import React, { useState } from 'react'

type JogadorProps = {
    id: string;
    nome: string;
    quantidadeTotalPescada?: number;
    selected?: boolean;
    onClick?: (id: string) => void;
}
export default function Jogador(jogadorProps: JogadorProps) {

    const handleJogadorClick = () => {
        if (jogadorProps.onClick) {
            jogadorProps.onClick(jogadorProps.id);
        }
    }

    const selected: string = jogadorProps.selected ? 'bg-lime-400' : 'bg-lime-200'
    return (
        <div className={selected + " flex flex-col items-center p-4 rounded-lg shadow-md w-64 cursor-pointer transition-all hover:scale-105"}
            onClick={handleJogadorClick}>
            <div className="w-24 h-24 rounded-full bg-lime-300 mb-4 overflow-hidden">
                <img
                    src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${jogadorProps.nome}`}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold text-gray-800 mb-2">{jogadorProps.nome}</h1>
                {jogadorProps.quantidadeTotalPescada != null && (
                    <div className="flex items-center gap-2">
                        <span className="text-black-600"> 🐟 Peixes no Cesto:</span>
                        <span className="font-medium">{jogadorProps.quantidadeTotalPescada}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
