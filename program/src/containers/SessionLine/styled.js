import styled from 'styled-components';
import { extensionTheme} from "../../style/theme";
import { Icon} from "../../style/styledComponents";

export const Container = styled.div`
  padding : 0px 0px;
  background : ${extensionTheme.white};
  border-radius : 8px;
  border : 1px solid ${extensionTheme.grey50};
  //overflow : hidden;
  display : flex;
  flex-direction : column;
  margin-bottom : 10px;
`;

export const Line = styled.div`
  display : flex;
  align-items : center;
  width : 100%.
`;

export const Delete = styled.div`
`;

export const Pastille = styled.div`
    margin-left : 10px;
    margin-right : 10px;
    width : 16px;
    height : 16px;
    position relative;
    background : ${extensionTheme.blueM};
    border-radius : 100%;
    cursor : pointer;
    
    &:before, &:after {
        position: absolute;
        left: 4px;
        top:7px;
        content: ' ';
        height: 2px;
        width: 8px;
        background-color: ${extensionTheme.white};
    }
    
     &:before{
        transform : rotate(90deg);
     }
    
    &.active{
        background : ${extensionTheme.orange};
        
        &:before{
            transform : rotate(0deg);
        }
    }
`;

export const Promotion = styled.div`
   width : 130px;
   
   & input{
        width : 110px;
        height : 26px;
   }
`;

export const CloseBox = styled.div`
   width : 30px;
   height : 25px;
   position : relative;
   z-index : 40;
   cursor : pointer;
   margin-top : 10px;
   
   &:before, &:after {
        position: absolute;
        left: 4px;
        top:7px;
        content: ' ';
        height: 2px;
        width: 20px;
        background-color: ${extensionTheme.white};
    }
    
     &:before{
        transform : rotate(45deg);
     }
     &:after{
        transform : rotate(-45deg);
     }
   
`;

export const DateBox = styled.div`
   display : flex;
   flex-direction : column;
   align-items : flex-end;
   position : absolute;
   background-color : ${extensionTheme.blueM};
   border : 1px solid ${extensionTheme.grey50};
   border-radius : 2px;
   overflow : hidden;
   z-index : 30;
   
   
   &>div:nth-child(2){
    background-color : ${extensionTheme.white};
   }

   & *{
    outline : none;
   }
   
`;


export const InputDate = styled.div`
   width : 140px;
   height : 28px;
   margin-right : 10px;
   display : flex;
   align-items : center;
   //overflow : hidden;
   //border-radius : 2px;
   border : 1px solid ${extensionTheme.grey50};
   cursor : pointer;
   position : relative;
   
   & ${Icon}{
        width : 30px;
        height :30px;
       background-color : ${extensionTheme.blueM};
       margin-right : 10px;
       border-radius : 2px 0 0 2px;
       overflow : hidden;
       
       & svg g path, & svg path, & svg rect, & svg circle {
            fill : ${ extensionTheme.white };
       }
       
       &:hover{
            & svg g path, & svg path, & svg rect, & svg circle {
                fill : ${ extensionTheme.white };
           }
       }
   }
`;

export const InputSelect = styled.div`
   width : 140px;
   padding-right : 10px;
   
   & select{
       border : 1px solid ${extensionTheme.grey50};
   }
`;


export const SafeDelete = styled.div`
  display : flex;
  justify-content : space-between;
  width : 100%;
  background: ${ extensionTheme.redXS };  
  color: ${ extensionTheme.redM };  
  padding-left : 8px; 
  padding-top : 15px;
  padding-bottom : 15px;
  align-items : center;
  box-sizing : border-box;
  border-radius : 0 0 8px 8px;
  overflow : hidden;
  
  &>p{
    padding-right : 10px;
  }
  
  & div.buttons{
    min-width : 160px;
    
    &>button{
        margin-right : 15px;
        margin-left : 0;

    }
  }
  
`;