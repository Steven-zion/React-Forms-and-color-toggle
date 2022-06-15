import React from "react"

export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#002" : "#018",
    }

    return (
        <div className="box" style={styles} onClick={()=> props.toggle(props.id)}></div>
    )
}