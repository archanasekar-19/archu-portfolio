// import * as React from 'react';
// import styled from 'styled-components'
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import { education } from '../../data/constants'; 
// import { Avatar } from '@mui/material';
// import './AlternateReverseTimeline.css'; 

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// position: relative;
// z-index: 1;
// align-items: center;
// @media (max-width: 960px) {
//     padding: 0px;
// }
// `
// const Wrapper = styled.div`
// position: relative;
// display: flex;
// justify-content: space-between;
// align-items: center;
// flex-direction: column;
// width: 100%;
// max-width: 1350px;
// padding: 0px 0px 80px 0px;
// gap: 12px;
// @media (max-width: 960px) {
//     flex-direction: column;
// }
// `
// const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//       font-size: 16px;
//   }
// `
// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.text_secondary};
//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 16px;
//     }
// `
// const TimelineSection = styled.div`
//     width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
//     @media (max-width: 660px) {
//         align-items: end;
//     }
// `;
// const Education = ()=> {
//   return (
//     <Container id="education">
//         <Wrapper>
//     <Title>Education</Title>
//     <Desc>
//                      My education has been a journey of self-discovery and growth. My educational details are as follows.
//     </Desc>
//     <TimelineSection>
//     <Timeline className="custom-timeline" position="alternate">
//       {education.map((item, index) => (
//         <TimelineItem key={item.id}>
//           <TimelineSeparator>
//             {/* <TimelineDot className="custom-timeline-dot img" src={item.img} /> */}
//             <Avatar className="custom-timeline-dot" alt="timeline-image" src={item.img} />
//             {index < education.length - 1 && <TimelineConnector className="custom-timeline-connector" />}
//           </TimelineSeparator>
//           <TimelineContent>
//             <h3 className="custom-timeline-title">{item.school}</h3>
//             <p className="custom-timeline-date">{item.date}</p>
//             <p className="custom-timeline-grade">{item.grade}</p>
//             <p className="custom-timeline-desc">{item.desc}</p>
//             <p className="custom-timeline-degree">{item.degree}</p>
//           </TimelineContent>
//         </TimelineItem>
//       ))}
//     </Timeline>
//     </TimelineSection>
//     </Wrapper>
//     </Container>
//   );
// }
// export default Education

import * as React from 'react';
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants'; 
import { Avatar } from '@mui/material';
import './AlternateReverseTimeline.css'; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    @media (max-width: 960px) {
        padding: 40px;
        color:#FFFFFF;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 0px 0px 80px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
        color:#FFFFFF;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top:1px;
        font-size: 16px;
        color:#FFFFFF;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 14px;
        color:#FFFFFF;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        margin-top:30px;
        align-items: end;
        color:#FFFFFF;
    }
`;



// const SContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 20px;
// `;

// const STitle = styled.div`
//     font-size: 42px;
//     text-align: center;
//     font-weight: 600;
//     margin-top: 20px;
//     @media (max-width: 768px) {
//         font-size: 32px;
//         color:#FFFFFF;
//     }
// `;

// const SDesc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     margin-top: 20px;
//     color:#FFFFFF;
// `;

// const SEducationList = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 20px;
//     color:#FFFFFF;
// `;

// const SEducationCard = styled.div`
//     background-color: ${({ theme }) => theme.card_background};
//     border-radius: 10px;
//     padding: 20px;
//     width: 300px;
//     color:#FFFFFF;
// `;

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #000000; /* Black background */
`;

const STitle = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: #FFFFFF;
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const SDesc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    margin-top: 20px;
    color: #FFFFFF;
`;

const SEducationList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const SEducationCard = styled.div`
    background-color: #000000; /* Black background */
    border-radius: 20px;
    padding: 20px;
    margin-top:15px;
    width: 330px;
    color: #FFFFFF;
    border: 2px solid transparent; /* Transparent border */
    transition: transform 0.3s ease-in-out;
    border-image: linear-gradient(135deg, #8A2BE2 0%, #4169E1 100%);
    border-image-slice: 1;
    &:hover {
        transform: translateY(-5px);
    }
`;
const SchoolName = styled.h3`

    color: #EE82EE; /* Pink */
    font-size: 20px;
    margin-top:6px;
    margin-bottom: 8px;
`;

const Date = styled.p`
    color: #EE82EE; /* Violet */
    font-size: 16px;
    margin-bottom: 4px;
`;

const Grade = styled.p`
    color:#00FFFF; /* Purple */
    font-size: 16px;
    margin-bottom: 4px;
`;

const Description = styled.p`
    color: #FFFFFF; /* Blue */
    font-size: 16px;
    margin-bottom: 4px;
`;

const Degree = styled.p`
    color: #EE82EE; /* White */
    font-size: 16px;
    margin-top: 10px;
    font-weight:500px;
`;
export { SContainer, STitle, SDesc, SEducationList, SEducationCard };

const Education = () => {
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);

    React.useEffect(() => {
        const checkScreenWidth = () => {
            setIsSmallScreen(window.innerWidth <= 960);
        };

        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    if (isSmallScreen) {
        return (
            <SContainer id="education">
            <STitle>Education</STitle>
            <SDesc>
                My education has been a journey of self-discovery and growth. My educational details are as follows.
            </SDesc>
            <SEducationList>
                {education.map((item) => (
                    <SEducationCard key={item.id}>
                        <Avatar alt="timeline-image" src={item.img} />
                        <SchoolName>{item.school}</SchoolName>
    <Date>{item.date}</Date>
    <Grade>{item.grade}</Grade>
    <Description>{item.desc}</Description>
    <Degree>{item.degree}</Degree>
                    </SEducationCard>
                ))}
            </SEducationList>
        </SContainer>
        );
    }

    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline className="custom-timeline" position="alternate">
                        {education.map((item, index) => (
                            <TimelineItem key={item.id}>
                                <TimelineSeparator>
                                    <Avatar className="custom-timeline-dot" alt="timeline-image" src={item.img} />
                                    {index < education.length - 1 && <TimelineConnector className="custom-timeline-connector" />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <h3 className="custom-timeline-title">{item.school}</h3>
                                    <p className="custom-timeline-date">{item.date}</p>
                                    <p className="custom-timeline-grade">{item.grade}</p>
                                    <p className="custom-timeline-desc">{item.desc}</p>
                                    <p className="custom-timeline-degree">{item.degree}</p>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Education;
