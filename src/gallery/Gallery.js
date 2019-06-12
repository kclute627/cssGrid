import React from 'react';
import UserGrid from '../Profile/UserGrid'; 
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Image} from '../App'
import Posts from '../POsts';



const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 20px;
 
  
`
const LinkGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
`
const TabLink = styled(Link)`
    text-decoration: none;
    color: black;
    width: 50px;
`



export function Gallery({match}) {
    return (
      <div>
        <UserGrid/>
        <LinkGrid>
            <TabLink to={`${match.url}/test`}>
                Square
            </TabLink>
            <TabLink to={`${match.url}/test`}>
                Cascade
            </TabLink>
        </LinkGrid>
  
        <PhotoGrid>
          {Posts.map(i => (
                  <Link
                    key={i.id}
                    to={{
                      pathname: `/img/${i.id}`,
                      // this is the trick!
                      state: { modal: true }
                    }}
                  >
                    <Image index={i.id} />
                    
                  </Link>
                ))}
  
        </PhotoGrid>
       
  
      </div>
      
     
    );
  }
