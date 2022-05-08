import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function header() {
   //initial close
   const [BurgerStatus, setBurgerStatus] = useState(false);
   const cars = useSelector(selectCars)
   console.log(cars);
   
   return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu> 
          { cars && cars.map((car,index)=>(
              <a key={index} src="">{car}</a>  
          ))}    
        </Menu>
        <RightMenu>
              <a src="">Shop</a>        
              <a src="">Tesla Account</a>    
              <CustomMenu onClick={
                ()=>setBurgerStatus(true)}
                />   
        </RightMenu>
        <BurgerNav show={BurgerStatus} >
          <Closewrapper>
            <Customclose onClick={()=>setBurgerStatus(false)}/>
          </Closewrapper>
            { cars && cars.map((car,index)=>(
              <li key={index}><a href="#">{car}</a></li>
            ))} 
          <li><a href="#">Existing inventory</a></li>
          <li><a href="#">Tradein </a></li>
          <li><a href="#">Used inventory</a></li>
          <li><a href="#">CyberTruck</a></li>
          <li><a href="#">Roadster</a></li>
          
        </BurgerNav>
      
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
      top:0;
      left:0;
      padding 0 20px;
      right:0;
      z-index:1;
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
const BurgerNav = styled.div`
          position: fixed;
          top:0;
          bottom:0;
          right:0;
          width: 300px;
          background: white;
          z-index:16;
          list-style:none;
          padding:20px;
          display:flex;
          flex-direction:column;
          text-align:start;  
          transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
          transition: transform 0.2s ;

            li{
              padding: 20px 0;
              border-bottom: 1px solid rgba(0,0,0,.2);
              a{
                text-decoration: none;
                font-weight:600;
            }
            
         
`
const Customclose = styled(CloseIcon)`
          cursor:pointer;
`
const Closewrapper = styled.div`
          display:flex;
          justify-content:flex-end;
`