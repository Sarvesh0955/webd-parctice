function Slots({ val1 , val2 , val3 }) {
    const isCorrect = (val1 === val2) && (val2 === val3);
    const styles = { color: isCorrect ? 'green' : 'red', };
    return (
        <div>
            <h1> {val1} {val2} {val3} </h1>
            <h3 style={styles}>{isCorrect ? "You Win" : "You lose"}</h3>
            {isCorrect && <h3>Congrats!!!</h3>}
        </div>
    );
}

export default Slots;