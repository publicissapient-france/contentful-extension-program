import styled from 'styled-components';
import { contentfulTheme, extensionTheme } from './theme';

export const Extension = styled.div`
    width : auto;
    height : auto;
    p {
        margin : 0;
    }
`;
export const MainContainer = styled.div`
    border-radius : 2px;
    border : 1px solid ${extensionTheme.grey30};
    padding-bottom : 20px;
    margin-bottom : 20px;
    padding-top : 20px;
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    height : auto;
    font-family :${ contentfulTheme.basicFont };
    font-size : 14px;
    font-weight : 400;
    background-color : ${extensionTheme.grey10};
    
    h2{
       font-weight : 300; 
       font-size : 14px;
       color : ${ contentfulTheme.grey };
    }
    
    select{
        height : 30px;
        box-sizing : border-box;
        padding-top : 6px;
        padding-bottom : 7px;
        padding-left : 1ex;
        padding-right : 8ex;
        border : 1px solid  ${ contentfulTheme.grey };
        border-radius : 2px;
        background : none;
         appearance : none;
        -webkit-appearance : none;
        text-overflow : ellipsis;
        overflow : hidden;
        white-space : nowrap;
        background-color : white;
        background-image : url('https://static.contentful.com/app/svg/dd-arrow-down-9ca5518bcf.svg'), none;
        background-position:center right 0.8em;
        background-repeat : no-repeat, repeat;
        background-size : 12px, 100%;
        font-size : 13px;       
    }

    input {
        font-size : 14px;
        color : ${ contentfulTheme.black };
        border : 1px solid ${extensionTheme.grey40};
        height : 30px;
        background : ${extensionTheme.white};
        border-radius : 2px;
        overflow : hidden;
    }
    
    label{
        line-height : 24px;
        font-family :${ contentfulTheme.basicFont };
        line-height : 15px;
        align-self:center;
        font-size:13px;
        font-weight : 400;
        color :  ${ extensionTheme.grey80 };
    }
    
    section{
      width : 100%;
      margin-bottom : 15px;
    }
    
    section.reset{
        width : 100%;
        display : flex;
        justify-content:flex-end;
        align-items : center;
        padding-top : 10px;
        
        button {
            cursor : pointer;
            height : fit-content;
            border : 1px solid  ${ contentfulTheme.grey };
            background : transparent;
            border-radius : 4px;
            padding : 6px;
            font-size : 11px;
            line-height : 11px;
            opacity : 0.8;
        }
    }
    
    section.field{
        display : flex;
        flex-direction : column;
        width : fit-content;
        
        p{
            margin : 0;
            font-family:${ contentfulTheme.basicFont };
            font-size : 14px;
            font-weight : 100;
        }
    }
   
    section.textPreview{
        width : 100%;
    }

    p.subtext{
        font-size : 12px !important;
        font-family :${ contentfulTheme.basicFont };
        padding-top : 10px;
        color : ${ contentfulTheme.black };
        opacity : 0.6;
    }
    
    .hidden{
        display : none;
    }
    
    textarea{
       border-color : ${extensionTheme.grey30};
       font-size : 14px;
       color : ${ contentfulTheme.black };
    }
`;


export const Icon = styled.div`
  width : 40px;
  height : 40px;
  cursor  : pointer;
  display :flex;
  align-items : center;
  justify-content : center;
  transition : transform 0.3s ease; 
  
  & svg g path, & svg path, & svg rect {
        fill : ${ extensionTheme.grey40 };
    }

  &.active{
    & svg g path, & svg path, & svg rect {
        fill : ${ extensionTheme.greenM };
    }
  }
  
  &.disable{
    & svg g path, & svg  path {
        fill : ${ extensionTheme.grey20 };
    }
  }
  
  &:not(.disable):hover{
    & svg g path, & svg  path, & svg rect {
        fill : ${ extensionTheme.greenM };
    }
  }
  
   &.trash:hover{
    & svg g path, & svg path, & svg  rect {
        fill : ${ extensionTheme.redM };
    }
  }
  &.trash.active{
    & svg g path, & svg path, & svg  rect {
        fill : ${ extensionTheme.redM };
    }
  }
  
  &.rotate{
    transform : rotate(180deg);
  }
  
  &.toggleAll{
    & svg g path, & svg path, & svg  rect {
        fill : ${ extensionTheme.white };
    }
    
    &:hover{
        & svg g path, & svg path, & svg  rect {
            fill : ${ extensionTheme.white };
        }
    }
  }
  
`;




export const FlexBox = styled.div`
   display : flex;
`;