import React from 'react';
import PropTypes from 'prop-types';
import { P, Span } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <P>
        <Span className=''>Good: {good}</Span>
        <Span className=''>Neutral: {neutral}</Span>
        <Span className=''>Bad: {bad}</Span>
        <Span className=''>Total: {total}</Span>
        <Span className=''>Positive feedback: {positivePercentage}%</Span>
    </P>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;