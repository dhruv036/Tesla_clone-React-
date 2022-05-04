import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';


function header() {
  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
              <a src="">Model S</a>     
              <a src="">Model 3</a>     
              <a src="">Model X</a>     
              <a src="">Model Y</a>     
        </Menu>
        <RightMenu>
              <a src="">Shop</a>        
              <a src="">Tesla Account</a>    
              <CustomMenu/>   
        </RightMenu>
      
    </Container>
  )
}

export default header

const Container = styled.div`
      position: fixed;
      min-height:60px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding: 0 20px;
      top:0;
      left:0;
      right:0;
`
const Menu = styled.div`
      display: flex;
      justify-content:center;
      align-items: center;
      flex:1;
      a{
          font-weight:600;
          padding:0 20px;
         
          text-transform:uppercase;
          flex-wrap: nowrap;
      }
  @media(max-width: 768px){
    display: none;
  }

`
const RightMenu =styled.div`
         display: flex;
          justify-content:center;
          align-items:center;
   
      a{
          margin-right:10px;
          font-weight:600;
          text-transform:uppercase;
      }
`
const CustomMenu =  styled(MenuIcon)` 
          cursor:pointer;
`