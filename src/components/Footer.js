import React, { Component } from "react";
import styled from "styled-components";
import globe from '../globe.png';
import rupee from '../rupee.png';
import arrow from '../up-arrow.png';

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: lightgrey;
    display: flex;
    margin: 0;
    background-color: white;
`;

const Text1 = styled.div`
    display: flex;
    font-size: 0.84em;
`;

const Translation = styled.div`
    margin-left: 288px;
    /* &:hover {
        text-decoration: underline;
    } */
    display: flex;
    /* cursor: pointer; */
`;

const Globe = styled.img`
    height: 20px;
    margin-top: 12px;
    cursor: pointer;
`;

const Language = styled.div`
    padding-left: 5px;
    margin-top: 12px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    font-size: 0.87em;
    font-weight: 600;
`;

const Money = styled.div`
    display: flex;
    margin-left: 22px;
    margin-top: 12px;
`;

const Rupee = styled.img`
    height: 12px;
    margin-top: 5px;
    cursor: pointer;
`;

const Currency = styled.div`
    padding-left: 6px;
    font-size: 0.87em;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Support = styled.div`
    display: flex;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    margin-left: 23px;
`;

const Text2 = styled.div`
    font-size: 0.87em;
    font-weight: 600;
    margin-top: 12px;
`;

const Icon = styled.img`
    height: 15px;
    padding-top: 15px;
    padding-left: 12px;
`;

const LeftContainer = styled.div`
    display: flex;
    margin-left: 40px;
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 1.05em;
`;

const T1 = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const T2 = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const T3 = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const T4 = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const T5 = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

class Footer extends Component {
    render() {
        return(
            <Container>
                <Text1>
                    <LeftContainer>
                        © 2022 Airbnb, Inc.
                        &nbsp; • &nbsp;
                        <T1>Privacy</T1>
                        &nbsp; • &nbsp;
                        <T2>Terms</T2>
                        &nbsp; • &nbsp;
                        <T3>Sitemap</T3>
                        &nbsp; • &nbsp;
                        <T4>Company details</T4>
                        &nbsp; • &nbsp;
                        <T5>Destinations</T5>
                    </LeftContainer>
                </Text1>
                <Translation>
                    <Globe src={globe}/>
                    <Language>English (IN)</Language>
                </Translation>
                <Money>
                    <Rupee src={rupee}/>
                    <Currency>INR</Currency>
                </Money>
                <Support>
                    <Text2>Support & Resources</Text2>
                    <Icon src={arrow}/>
                </Support>
            </Container>
        )
    }
}

export default Footer;