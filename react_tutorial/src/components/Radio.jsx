import React, { useState } from 'react'

const Radio = () => {
    const [gender, setGender] = useState('');
    
    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="male"
                    checked={gender === 'male'}
                    onChange={(e) => setGender(e.target.value)} 
                    //e.target.value extracts the value of the input element.
                    // ┌─ Event Object (e)
                    // │       └─ target (the <input> element)
                    // │       └─ value ("male" or "female")
                    // │
                    // └─> This value gets passed to setGender()
                />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    value="female"
                    checked={gender === 'female'}
                    onChange={(e) => setGender(e.target.value)}
                />
                Female
            </label>
            <p>Selected Gender: {gender}</p>
        </div>
    );
}

export default Radio
