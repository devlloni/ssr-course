import React from 'react';

const Home = () => {
    return( 
        <div>
            <div> hola soy el MEJOR mejorr componente! </div>
            <button onClick={()=> console.log('Hola!')}>Press me!</button>
        </div>
     )
};

export default {
    component: Home,
};