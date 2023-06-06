import React from 'react';

const AdditionalInfo = ({ additionalDetails, setAdditionalDetails }) => {

    const handleInputs = (e) => {
        setAdditionalDetails(e.target.value)
    };

   

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
            
            <textarea style={{ minHeight: '5rem', minWidth: '22rem', maxHeight: '30rem' ,maxWidth:'100%' }}
                name='additionalInfo'
                value={additionalDetails}
                onChange={handleInputs}
            />
        </div>
    );
};

export default AdditionalInfo;
