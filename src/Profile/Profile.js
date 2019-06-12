import React from 'react';
import styled, { css } from 'styled-components';


export const Profile = styled.div`
 width: 200px;
 height: 200px;
 background: no-repeat center/170% url(/img/1.jpeg);
 border-radius: 100px;
 margin: 40px;
 ${({mini}) => mini && css `
    height: 50px;
    width: 50px;
    margin: 5px;
 `}

`

