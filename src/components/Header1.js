import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homeIcon from '../homeIcon-noBG.png';
import searchIcon from '../searchIcon.png';
import globeIcon from '../globe.png';
import tile from '../menu.png';
import profile from '../user.png';

const Container = styled.div`
    height: 77px;
    background-color: white;
    display: flex;
    border: 1.25px;
    border-color: lightgray;
    /* border-bottom: 20px; */
    border-style: solid;
    /* position: fixed;
    top: 0; */
    position: sticky;
    top: 0;
`;

const Image1 = styled.img`
    height: 50%;
    margin-left: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    cursor: pointer;
`;

const InputWrapper = styled.div`
    cursor: pointer;
    background-color: white;
    /* box-shadow: inset; */
    box-shadow: 0px 1px 1px lightgrey;
    padding-left: 27px;
    padding-right: 8px;
    /* padding-top: 12px; */
    padding-bottom: 10px;
    margin-left: 24.5%;
    /* margin-right: 24.5%; */
    margin-top: 15px;
    margin-bottom: 15px;
    /* width: 10px; */
    display: flex;
    border-width: 1px;
    border-style: solid;
    border-color: lightgrey;
    border-radius: 50px;
    &:hover {
        box-shadow: 0px 2px 3px lightgrey;
        /* background-color: whitesmoke; */
    }

`;

const Text1 = styled.div`
    font-weight: 500;
    padding-top: 12px;
    font-size: 0.87em;
    /* font-weight: bold; */
`;

const Text2 = styled.div`
    font-weight: 500;
    padding-bottom: 20px;
    padding-top: 12px;
    font-size: 0.87em;
`;

const Partition = styled.div`
    font-weight: lighter;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 3px;
    font-size: x-large;
    color: lightgray;
`;

const Text3 = styled.div`
    /* outline: none; */
    font-size: 0.87em;
    color: gray;
    padding-top: 12px;
`;

const Search1 = styled.img`
    height: 100%;
    padding-left: 15px;
    /* margin-right: 30px; */
    /* padding-top: 20px; */
    padding-top: 5px;
    margin-bottom: 20px;
`;

const SideWrapper = styled.div`
    display: flex;
    padding-left: 145px;
    padding-top: 17px;
    padding-bottom: 17px;
`;

const Text4 = styled.div`
    &:hover {
        /* box-shadow: 0px 0px 2px gray; */
        background-color: whitesmoke;
    }
    /* box-shadow: 0px 0px 2px gray;
    background-color: lightgrey; */
    cursor: pointer;
    font-size: 0.87em;
    font-weight: 600;
    border-width: 10px;
    border-color: black;
    border-radius: 50px;
    padding-top: 10px;
    /* padding-bottom: 19px; */
    padding-left: 14.5px;
    padding-right: 14.5px;
`;

const Globe = styled.img`
    height: 40%;
    /* padding-top: 5%; */
    /* margin-left: 13px; */
    cursor: pointer;
    &:hover {
        /* box-shadow: 0px 0px 2px gray; */
        background-color: whitesmoke;
    }
    /* background-color: whitesmoke; */
    border-width: 10px;
    border-color: black;
    border-radius: 50px;
    padding-left: 13px;
    padding-right: 13px;
    padding-bottom: 13px;
    padding-top: 13px;
`;

const ProfileWrapper = styled.div`
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    border-color: lightgrey;
    border-radius: 50px;
    padding-left: 11.5px;
    margin-left: 5px;
    /* padding-top: 5px; */
    box-shadow: 0px 0px 1px lightgrey;
    &:hover {
        box-shadow: 0px 2px 3px lightgrey;
        /* background-color: whitesmoke; */
    }
`;

const Tile = styled.img`
    height: 45%;
    /* padding-top: 0px; */
    padding-bottom: 5px;
`;

const ProfileImage = styled.img`
    height: 70%;
    padding-left: 13.5px;
    padding-right: 10px;
    padding-top: 6px;
`;

class Header1 extends Component {
    render() {
        return(
            <Container>
                <Link to='/'><Image1 src={homeIcon}/></Link>
                <InputWrapper>
                    <Text1>Anywhere</Text1>
                    <Partition>|</Partition>
                    <Text2>Any week</Text2>
                    <Partition>|</Partition>
                    <Text3>Add guests</Text3>
                    <Search1 src={searchIcon}/>
                </InputWrapper>
                <SideWrapper>
                    <Text4>Airbnb your home</Text4>
                    <Globe src={globeIcon}></Globe>
                    <ProfileWrapper>
                        <Tile src={tile}/>
                        <ProfileImage src={profile}/>
                    </ProfileWrapper>
                </SideWrapper>
            </Container>

            // <header className='header1-wrapper'>
            //     <img src={homeIcon} alt='Logo' className='airbnb-image'/>
            //     <div className='header1-'>
            //         <div>Anywhere</div>
            //         <div>Any week</div>
            //         <div>
            //             <input />
            //         </div>
            //     </div>
            // </header>
        )
    }
}

export default Header1;