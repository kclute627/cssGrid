import React from 'react';
import Posts from '../POsts';
import {Image} from '../App';
import {PostGrid, InfoGrid} from './PostGrid';
import {Profile} from '../Profile/Profile';
import {MiniUserGrid} from '../Profile/UserGrid';

import styled, {createGlobalStyle} from 'styled-components';



const OverFlowHidden = createGlobalStyle`
body{
    overflow: hidden; 
}

`


const ModalStyled = styled.div`
        position: absolute;
        background: #fff;
        top: ${({top})=> top}px;
        left: 35%;
        width: 600px;
       
        border: 2px solid #444;
`





export function Modal({ match, history }) {
    let image = Posts[parseInt(match.params.id, 10) - 1];
  
    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height: "5000px",
          background: "rgba(0, 0, 0, 0.8)"
        }}
      >
        <ModalStyled
            top={window.scrollY + (window.innerHeight/2) - 250}
        >
            <OverFlowHidden/> 
            <PostGrid>
                <Image inModal index={image.id} />
                <InfoGrid>
                    <MiniUserGrid >
                        <Profile mini />
                        <h2>Grid Gallery </h2>
                    </MiniUserGrid>
                    <div className="">
                        <h1>{image.title}</h1> 
                    </div>          
                   <div>45 Likes</div>
                   
                </InfoGrid>      
            </PostGrid>             
        </ModalStyled>
      </div>
    );
  }