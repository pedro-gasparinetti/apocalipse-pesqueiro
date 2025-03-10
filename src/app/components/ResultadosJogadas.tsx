import React from 'react'
import { GameState } from '../types/GameState';
import Jogador from './Jogador';
import { PlayerProfile, PlayerState } from 'playroomkit';
import { ResultadoRodada } from '../types/ResultadoRodada';

type ResultadosJogadasProps = {
    resultadoJogada: ResultadoRodada;
    visible: boolean;
};
//1 - nao roubou e fiscalizou e nao achou nada
//2 - nao roubou e fiscalizou e achou algo
//3 - nao roubou e nao foi fiscalizou - v
//4 - roubou e foi fiscalizado -- v
//5 - roubou e nao foi fiscalizado - v


const textoInicial = "Selecione a quantidade a pescar, se vai fiscalizar algum jogador e clique em 'JOGAR' para iniciar a rodada!";
export default function ResultadosJogadas(resultadosJogadasProps: ResultadosJogadasProps) {
    //const resultadoJogada = resultadosJogadasProps.jogador?.getState(RESULTADO_JOGADA);
    //console.log(resultadosJogadasProps?.resultadoJogada)
    //resultadoJogadaJogador.fiscalizadores = jogada.fiscalizadoPor;
    //  resultadoJogadaJogador.peixesPescadosJogador

    let mensagem = ""
    if (resultadosJogadasProps?.resultadoJogada?.roubou && resultadosJogadasProps?.resultadoJogada?.fiscalizadores?.length > 0) {
        mensagem = "Você pescou acima do limite, foi fiscalizado e perdeu os peixes desta rodada!"
    } else {
        const rateio = !isNaN(resultadosJogadasProps?.resultadoJogada?.rateioGanhado) ? resultadosJogadasProps?.resultadoJogada?.rateioGanhado : 0;
        const totalPeixesAcumulados = resultadosJogadasProps?.resultadoJogada?.peixesPescadosJogador + rateio;
        mensagem = "Você acumulou " + totalPeixesAcumulados.toPrecision(2) + " peixes nessa rodada!"
    }

    if (resultadosJogadasProps?.resultadoJogada?.fiscalizadores?.length > 0) {
        mensagem += "\n\nVocê foi fiscalizado por: " + resultadosJogadasProps?.resultadoJogada?.fiscalizadores.map((fiscalizador: PlayerProfile) => {
            return fiscalizador.name;
        }).join(', ')
    }

    mensagem += "\n\nCresceram " + resultadosJogadasProps?.resultadoJogada?.crescimentoLago?.toPrecision(2) + " peixes no lago nesta rodada!"


    const conteudo = (resultadosJogadasProps?.resultadoJogada) ? mensagem : textoInicial
    return resultadosJogadasProps.visible && (
        <div className="w-full h-full flex items-center justify-center">
            <textarea
                className="bg-cyan-700 rounded-md border-2 w-full h-32 resize-none mb-4 p-2"
                readOnly={true}
                value={conteudo}
            ></textarea>
        </div>
    )


}
/* 
{resultadoJogada.mensagem}
                {resultadoJogada.fiscalizadores ? 
                    <p>Fiscalizadores:  
                        {resultadoJogada.fiscalizadores.map((fiscalizador: PlayerProfile) => { 
                        return fiscalizador.name; 
                        }).join(', ')}
                    </p> 
                    : 
                    textoInicial
                }
                {resultadoJogada.rateio ? Rateio: {resultadoJogada.rateio}</p> : null} */
