import React from "react";
import styled from "styled-components"
import  Section from "./Section"

function Home()
{
    return(
        //? Container used to design specific div
      <Container>  
          <Section
          title= "Model S"
          discription="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          /> 
           <Section
          title= "Model Y"
          discription="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          /> 
              <Section
          title= "Model 3"
          discription="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          /> 
          
          <Section
          title= "Model X"
          discription="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          /> 

          <Section
          title= "Lowest cost Solar Panels in America"
          discription="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          /> 
          
          <Section
          title= "Accessories"
          discription=""
          backgroundImg="accessories.jpg"
          leftBtnText="shop"
          /> 
          
      </Container>
    )
}
export default Home

const Container = styled.div`
      height:100vh;
`