import { useState } from "react";

function ScoreBoard({numPlayers=2, winScore=10}){
    const [scores,setScore] = useState(new Array(numPlayers).fill(0));

    const increaseScore = (ind) => {
        setScore(prevScore => {
            return prevScore.map((e,i) => {
                if(i==ind){
                    return e+1;        
                }
                else{
                    return e;
                }
            })
        })
    };

    const resetScore = () => {
        setScore(prevScore => {
            return prevScore.map(e => {return 0;} )
        })
    }

    return (
    <div>
        <h1>Score Board</h1>
        <ul>
        {scores.map((e,i) => (
            <li>
            <span>Player{i+1}: {e} </span>
            <button onClick={() => increaseScore(i)}>+1</button>
            {e>=winScore && <span>Winner</span>}
            </li>            
        ))}
        </ul>
        <button onClick={resetScore}>Resest</button>
    </div>
    )
}

export default ScoreBoard;