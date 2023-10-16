import React from 'react';
import Simpson from "../Simpson/Simpson";

const Simpsons = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Simpson name={'Marge Simpson'}
                     image={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
            />
            <Simpson name={'Homer Jay Simpson'}
                     image={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
            />
            <Simpson name={'HMargaret Abigail "Maggie" Simpson, Jr.'}
                     image={'https://static.wikia.nocookie.net/simpsons/images/a/a1/Maggie%27s_daughter.png'}
            />
            <Simpson name={'Lisa Marie Simpson'}
                     image={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
            />
            <Simpson name={'Bartholomew JoJo "Bart" Simpson'}
                     image={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
            />
        </div>
    );
};

export default Simpsons;