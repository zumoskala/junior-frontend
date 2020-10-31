import React from "react";

function Image(props) {
    return (
        <div className="image_box" style={styles.image_box}>
            <img style={styles.image} src={props.src} alt="Pictures of dogs."/>
        </div>
    )
}

const styles = {
    image_box: {
        display: 'block',
        width: '350px',
        height: '250px',
        borderRadius: '25px',
        margin: '0 0.5rem',
        overflow: 'hidden'
    },
    image: {
        width: '350px',
        height: '250px'
    }
}

export default Image;
