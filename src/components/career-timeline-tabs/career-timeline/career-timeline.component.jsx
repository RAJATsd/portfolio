import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

export const EducationTimeline = () => (
    <Timeline align="alternate">
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">1-3 Standard</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>KV AFS Nalia (Gujarat)</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">4-9 Standard</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>KV AFS Begumpet (Telangana)</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">10th Standar</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>KV No.2 Udhampur (J&K)</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">12th Standard</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>KV AFS Sulur (Tamil Nadu)</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">B.Tech in Computer Science</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>JMIT Radaur (Haryana)</Typography>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
);

export const CareerTimeline = () => (
    <Timeline align="alternate">
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">OCT 2018</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>HACK CBS Top 20</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">March 2019</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>SIH 2019 Grand Finale (Chennai)</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">June 2019</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>Software Intern At DRDO Delhi</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">May 2020</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>Web Developer Intern At Make Your Cloth Technology</Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography color="textSecondary">August 2020</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography>SIH 2020 Grand Finale (Fully Online)</Typography>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
);