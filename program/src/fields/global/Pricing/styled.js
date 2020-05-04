import styled from 'styled-components';
import { extensionTheme} from "../../../style/theme";

export const Container = styled.div`
  padding : 10px;
  display : flex;
  width : 70%;
  justify-content : flex-end;
  
`;

export const Box = styled.div`
  display : flex;
  flex-direction : column;
  padding-left : 20px;
`;

export const Field = styled.div`
  display : flex;
  width : 100%;
  box-sizing : border-box;
  
  input{
    border : 1px solid  ${ extensionTheme.grey80 };
    width : 100%;
    padding-left : 5px;
    box-sizing:border-box;
    max-width : 130px;
    
    &.updated{
        background : ${ extensionTheme.blueM };
        color :  ${ extensionTheme.white };
    }
    
    &[type="checkbox"]{
        width : 20px;
        height : 30px;
        margin : 0;
        padding-right : 5px;
    }
  }
  
  select {
    &.updated{
            background : ${ extensionTheme.blueM };
            color : ${ extensionTheme.white }
        }
  }
  
  span {
    font-size : 11px;
    color :  ${ extensionTheme.grey50 };
    margin-top:3px;
  }
  
  &.open{
    display: flex;
  }
`;
