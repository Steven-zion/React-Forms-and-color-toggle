
import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";

import "./main.css";



export default function App(props) {
    //eslint-disable-next-line
    const [squares, setSquares] =React.useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares =>{
            return prevSquares.map(square => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })

        //alt way
        
        /*setSquares(prevSquares =>{
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++){
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id){
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })*/
    }

    const squareElements = squares.map((square => 
        <Box 
        key={square.id} 
        id={square.id} 
        on={square.on} 
        toggle={toggle}/>
    ))

    return(
        <main>
            {squareElements}
        </main>
        
    )
}



/**
 forms

 import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    console.log(formData.favColor)
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor" 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
        </form>
    )
}


STYLESHEET

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 20px;
}

input[type="text"], input[type="email"] {
    margin-bottom: 15px;
    height: 30px;
    text-indent: 10px;
    border: 1px solid #444;
    border-radius: 5px;
    display: block;
}

input[type="checkbox"], input[type="radio"] {
    margin-right: 0.75rem;
}

textarea {
    margin-bottom: 15px;
    border: 1px solid #444;
    border-radius: 5px;
    display: block;
    
}

 */