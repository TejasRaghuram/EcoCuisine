import React, { useState } from 'react';
import { createToken, getEcoPoints, addEcoPoints, subtractEcoPoints, getDiscount } from "./../scripts/EcoPoints.js";

function Test() {
    const [tokenResult, setTokenResult] = useState('Click start to create a token');
    const [ecoPoints, setEcoPoints] = useState('EcoPoints data will appear here');
    const [updatedEcoPoints, setUpdatedEcoPoints] = useState('Updated EcoPoints data will appear here');
    const [discountResult, setDiscountResult] = useState('Discount data will appear here');

    const handleCreateToken = () => {
        setTokenResult('Creating token...');
        createToken("TestToken")
            .then(result => setTokenResult(`Token created: ${result}`))
            .catch(error => setTokenResult(`Token creation failed: ${error.message}`));
    };

    // Handlers for other functions can be added here

    return (
        <div>
            <h1>Testing EcoPoints Functions</h1>
            <button onClick={handleCreateToken}>Start</button>
            <p>{tokenResult}</p>

            {/* Placeholder for results of other functions */}
            <p>{ecoPoints}</p>
            <p>{updatedEcoPoints}</p>
            <p>{discountResult}</p>
        </div>
    );
}

export default Test;