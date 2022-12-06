import React, { Component } from 'react';
import styled from 'styled-components';
import video from '../vid.png';

const Container = styled.div`
    background-color: whitesmoke;
    display: flex;
`;

const Text1 = styled.div`
    font-size: 1.1em;
    font-weight: 600;
    padding-left: 40px;
    padding-top: 15px;
    padding-bottom: 20px;
`;

const Film = styled.div`
    display: flex;
    padding-left: 563px;
`;

const VideoText = styled.div`
    display: flex;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    padding-right: 14px;
`;

const Video = styled.img`
    height: 55%;
    padding-top: 12px;
`;

const Text2 = styled.div`
    font-size: 0.89em;
    padding-top: 20px;
    padding-left: 12px;
    /* font-weight: 600; */
`;

const Partition = styled.div`
    /* padding-left: 14px; */
    font-size: xx-large;
    /* font-weight: 100; */
    font-weight: lighter;
    color: lightgrey;
`;

const Explore = styled.div`
    font-size: 0.9em;
    padding-left: 12px;
    padding-top: 20px;
    padding-right: 15px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

class HideHeader extends Component {
    render() {
        return(
            <Container>
                <Text1>Introducing our 2022 Winter Release</Text1>
                <Film>
                    <VideoText>
                        <Video src={video}/>
                        <Text2>Play the film</Text2>
                    </VideoText>
                    <Partition>|</Partition>
                    <Explore>Explore what's new</Explore>
                </Film>
            </Container>
        )
    }
}

export default HideHeader;