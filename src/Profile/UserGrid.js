import React from 'react';
import styled from 'styled-components';
import {Profile} from './Profile';

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 80px;
    grid-template-areas: "photo name"
                         "photo label"
                         "photo description";

`

const Photo = styled.div`
    grid-area: photo;

`

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
`
const Label = styled.div`
    grid-area: label;

`

const Discription = styled.div`
    grid-area: description;
    max-width: 400px;

`
export const MiniUserGrid = styled.div`
    display: grid;
    justify-content: left;
    grid-template-columns: auto auto;
    gap: 10px;

`

export default function(){
return <UserGridStyled> 
            <Photo> <Profile/> </Photo>
            <Name>Name</Name>
            <Label><strong>400</strong> Followers </Label>
            <Discription>Lorem ipsum dolor amet locavore vegan synth,
             before they sold out cardigan post-ironic next level unicorn fixie. 
              air plant. Tumblr sticle. Raw denim distillery roof party, banh mi twee ennui juice.
            </Discription>
    
        </UserGridStyled>

}




