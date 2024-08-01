// src/components/Timeline.js
import React, { useState, useRef, useEffect } from 'react';
import timelineData from '../timelineData';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const TimelineItem = styled.div`
  padding: 20px;
  position: relative;
  background: #f9f9f9;
  border-radius: 6px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 20px;
    left: -12px;
    width: 20px;
    height: 20px;
    background: #f06;
    border-radius: 50%;
    border: 2px solid #fff;
  }
`;

const TimelineItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.div`
  font-weight: bold;
  color: #666;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.div`
  margin-top: 10px;
  color: #333;
`;

const Timeline = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Number of events to show initially
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prevCount) => prevCount + 1); // Load one more event at a time
        }
      },
      { threshold: 1.0 }
    );

    if (observer.current && observer.current.root) {
      observer.current.observe(observer.current.root);
    }
  }, []);

  useEffect(() => {
    const currentObserver = observer.current;
    return () => {
      if (currentObserver && currentObserver.root) {
        currentObserver.disconnect();
      }
    };
  }, []);

  return (
    <TimelineContainer>
      {timelineData.slice(0, visibleCount).map((event, index) => (
        <TimelineItem key={index} isVisible={index < visibleCount}>
          <TimelineItemHeader>
            <Date>{event.date}</Date>
            <Title>{event.title}</Title>
          </TimelineItemHeader>
          <Description>{event.description}</Description>
        </TimelineItem>
      ))}
      <div ref={observer.current}></div>
    </TimelineContainer>
  );
};

export default Timeline;
