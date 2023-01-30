import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, leaveFeedback }) {
    return (
        <div>
            {options.map(option => (
                <Button 
                    type='button' 
                    key={option}
                    onClick={() => leaveFeedback(option)}
                >{option}</Button>
            ))}
        </div>
    );
}



FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    leaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;