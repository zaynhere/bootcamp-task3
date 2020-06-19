import React from 'react';

function Mediacard({title , body ,imageUrl}){
    return <div>
        <h2>{title}</h2>
        <p>{body}</p>
        {imageUrl}
    </div>

};

export default Mediacard;