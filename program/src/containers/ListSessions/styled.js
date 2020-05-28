import styled from 'styled-components';
import {extensionTheme} from "../../style/theme";

export const Container = styled.div`
  margin-bottom : 10px;
  box-sizing : border-box;
  margin-left : 10px;
  margin-right : 10px;
  max-width : calc(100% - 20px);
 `;

export const Banner = styled.div`
  display : flex;
  width : 100%;
  padding-left : 10px;
  box-sizing : border-box;
  font-weight : 300;
  justify-content: space-between;
  align-items : center;
  height : 35px;
  background-color : ${extensionTheme.blueM};
  padding-left : 40px;
  margin-bottom : 20px;
  
  &>div{
    display : flex;
    width : 25%;
    
    &:nth-child(1), &:nth-child(2){
        width : 150px;
    }
  }
  
  & p{
    line-height : 15px;
    align-self:center;
    font-size:13px;
    font-weight : 700;
    margin: 0;
    padding : 0;
    color : white;
  }
`;