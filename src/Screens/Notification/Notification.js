import {View, Text} from 'react-native';
import React from 'react';
export const Data = [
  {
    id: 1,
    content: "🔔You're on your way 🥳",
    quiz: 'Complete the quiz to start trading Futures!',
    time: '06:09PM . 01 Jun',
  },
  {
    id: 2,
    content: '🔔ACA is  -11.5% in last 24 hours',
    quiz: 'ACA is trading at ₹4.31.Tap to trade',
    time: '10:10AM . 01 Jun',
  },
  {
    id: 3,
    content: '🔔Unlock Futures NOW!',
    quiz: 'Take a simple quiz  and get access to Futures trading',
    time: '06:17AM . 31 May',
  },
  {
    id: 4,
    content: "🔔You're doing very well",
    quiz: 'Just a few easy Qs remaining to unlock Futures and 20X leverage',
    time: '01:09AM . 31 May',
  },
  {
    id: 5,
    content: '🔔XRP is +6.8% in last 24 hours',
    quiz: 'XRP price has jumped to ₹45.64. Track and invset',
    time: '02:16AM . 31 May',
  },
  {
    id: 6,
    content: '🔔ACA is +7.3% in last 24 hours',
    quiz: 'ACA is Trading at 4.54.Tap to trade',
    time: '08:16AM . 30 May',
  },
  {
    id: 7,
    content: "🔔You're on your way 🥳",
    quiz: 'Complete the quiz to start trading Futures!',
    time: '01:10PM . 30 May',
  },
  {
    id: 8,
    content: '🔔XRP is +6.5% in last 24 hours',
    quiz: 'XRP price has jumped to ₹44.40. Track and invset',
    time: '02:02AM . 30 May',
  },
  {
    id: 9,
    content: '🔔ETH is +4.0% in last 24 hours',
    quiz: 'ETH price has jumped to ₹1,5636643673.04. Track and invset',
    time: '08:23AM . 29 May',
  },
];
const Notification = () => {
  {
    Data.map((book, index) => {
      return (
        <Text style={styles.scrollText} key={book.id}>
          {book.content}
          {book.quiz}
          {book.time}
        </Text>
      );
    });
  }
};

export default Notification;
