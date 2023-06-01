import React from 'react';

const AdditionalInfo = ({ additionalDetails, setAdditionalDetails,err,setErr }) => {

    const handleInputs = (e) => {
        setAdditionalDetails(e.target.value)
    };

   

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
            {err ? (
                <p style={{color:'red'}}>Size should not be greater than 1000 words </p>
            ) : (null)}
            <textarea style={{ minHeight: '5rem', minWidth: '22rem', maxHeight: '30rem' ,maxWidth:'100%' }}
                name='additionalInfo'
                value={additionalDetails}
                onChange={handleInputs}
            />
        </div>
    );
};

export default AdditionalInfo;
