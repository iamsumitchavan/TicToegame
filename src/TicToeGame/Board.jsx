import React, { useState } from "react";
import Square from "./Square";

const Board = () => {

    const [state,setState] = useState(Array(9).fill(null));
    const [isXTurn , setIsXTurn] = useState(true);


    const hanleCheckWinner = () => {

        const logicArray = [
            [0 , 1 , 2],
            [3 , 4 , 5],
            [6 , 7 , 8],
            [0 , 3 , 6],
            [1 , 4 , 7],
            [2 , 5 , 8],
            [0 , 4 , 8],
            [2 , 4 , 6], 

        ];

        for(let logic of logicArray) {

            const [a , b , c] = logic;


            if(state[a] != null && state[a] == state[b] && state[a] == state[c]) {

                return state[a];
            }
        }

        return false;
    }

    
   const handleClick = (index) => {

            console.log("index is ",index);

            const copyState = [...state];

            copyState[index] = isXTurn ? "x" : "0";
            setState(copyState);
            setIsXTurn(!isXTurn)
   }
    

   
   const isWinner = hanleCheckWinner();
   

    return(
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="text-3xl font-bold text-green-500">Tic-Toe game...!</div>
         { isWinner ? <div className="p-2 shadow-xl ">
            <span className="text-2xl font-bold text-green-600"> winnner is {isWinner}</span>
          </div> :

         <div className="p-10 bg-white shadow-xl"> <div className="flex">
                <Square value={state[0]} onclick = {()=> {
                   handleClick(0);
                }} />
                <Square value={state[1]} onclick = {()=> {
                        handleClick(1);
                }}    />
                <Square value={state[2]} onclick = {()=> {
                        handleClick(2);
                }}  />
            </div>
            <div className="flex">
                <Square value={state[3]} onclick = {()=> {
                        handleClick(3);
                }}  />
                <Square value={state[4]} onclick = {()=> {
                        handleClick(4);
                }}  />
                <Square value={state[5]} onclick = {()=> {
                        handleClick(5);
                }}  />
            </div>
            <div className="flex">
                <Square value={state[6]} onclick = {()=> {
                        handleClick(6)
                }}  />
                <Square value={state[7]} onclick = {()=> {
                        handleClick(7)
                }}  />
                <Square value={state[8]} onclick = {()=> {
                        handleClick(8)
                }}  />
            </div></div> }
        </div>
    )
}

export default Board;