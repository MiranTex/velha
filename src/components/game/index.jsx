import {useEffect, useState} from "react";

import "./style.css"
import { testWin } from "../../data/winsPositions";


export function Game(){

    const [position,setPosition] = useState(new Array(9).fill(0))

    const [vez,setVez] = useState("o");

    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]); 

    useEffect(() => {
      if(testWin(player1)){
          alert("win");
      }
      if(testWin(player2)){
          alert("win");
      }
      
    }, [player1,player2]);
    

    const toPlayerArray = function(pos){
        if(vez == "o")
            setPlayer1([...player1,...[pos]])
        
        if(vez == "x")
            setPlayer2([...player2,...[pos]])

    }

    const jogar = function(pos){
        if(position[pos] == 0){

            let aux = position;

            

            aux[pos] = vez;
            setPosition(aux);
            
            toPlayerArray(pos);
            setVez(vez == "o" ? "x" : "o");
            
        }else{
            alert("ja jogado");
        }
    }


    const Bola = function(){        
        return (<div className="bola"></div>);
    }

    const Cruz = function(){

        return(
            <div className="cruz">
                <div className="first"></div>
                <div className="second"></div>
            </div>
        )
    }

    const block = function({index,num}){

        return (
            <div key={index+"block"} onClick={()=>jogar(index)} className={"block"}>
                {draw(num)}
            </div>)
    }

    const draw = function(pos){
        if(pos=="o")
            return Bola();
        
        if(pos=="x")
            return Cruz();

        return
    }


    const blocks = position.map((num,index)=>{

        return block({index,num});
    })
      
    return (
    <div className="container">
        <div id="game-container">

            {blocks}
            
        </div>
    </div>
    )
}