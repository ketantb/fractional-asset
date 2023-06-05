import * as React from 'react';
import './enquiryForm.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Personal Info', 'Preference', 'Additional Info'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption"></Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        <h5 className='feedback-msg'>Thank you for your valuable feedback !!</h5>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {activeStep === 0 ? (
                        <div className='form-section1'>
                            <form>
                                <input type='text' placeholder='Name *' />
                                <input type='text' placeholder='Email ID *' />
                                <input type='text' placeholder='Phone *' />
                                <div><select>
                                    <option>Select Location</option>
                                    <option>India</option>
                                </select>
                                </div>
                            </form>
                        </div>
                    ) : activeStep === 1 ? (
                        <div className='form-section2'>
                            <form>
                                <h5>Interested in ?</h5>
                                <div className='radio-option'>
                                    <div className='radio-option1'>
                                        <label htmlFor='fractional-ownership' >Fractional Ownership</label>
                                        <input type='radio' className='radioBtn' id='fractional-ownership' name='ownershipType' />
                                    </div>
                                    <div className='radio-option2'>
                                        <label htmlFor='full-ownership'>Full Ownership</label>
                                        <input type='radio' className='radioBtn' id='full-ownership' name='ownershipType' />
                                    </div>
                                </div>
                                <div className='selectoptions'>
                                    <label>Select No of Bedrooms *</label>
                                    <select>
                                        <option>Select Room</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div className='selectoptions'>
                                    <label>Location *</label>
                                    <select>
                                        <option>Select Location</option>
                                        <option>Alibaug</option>
                                        <option>Goa</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className='form-section3'>
                            <form>
                                <h5>How did you get to know about us? *</h5>
                                <select>
                                    <option>Choose Option</option>
                                    <option>Social Media</option>
                                    <option>Agent</option>
                                </select>
                                <textarea placeholder='Message *' />
                            </form>
                        </div>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
