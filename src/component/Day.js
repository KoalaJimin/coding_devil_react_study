import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Word from "./Word";

const Day = () => {
    const {day} = useParams();
    // const wordList = dummy.words.filter(word => (
    //     word.day === Number(day)
    // ))
    const [words, setWords] = useState([]);

    useEffect(() => {
        // API 호출
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setWords(data)
        })
    }, [day])

    return (
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word = {word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Day;