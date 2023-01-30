import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from 'components/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (state) => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  }

  countTotalFeedback = ({ good, neutral, bad} = this.state) => {
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = ({ good, neutral, bad} = this.state) => {
    return (Math.round((good/(good + neutral + bad))*100));
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions  
            options={Object.keys(this.state)} 
            leaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? 
            <Statistics 
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> :
            <Notification message="There is no feedback"></Notification>
          }
        </Section>
      </>
    );
  }
};

export default App;
