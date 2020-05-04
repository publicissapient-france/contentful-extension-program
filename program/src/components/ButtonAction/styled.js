import styled from 'styled-components';
import { contentfulTheme, extensionTheme } from '../../style/theme';

export const Button = styled.button`
   background :  ${ extensionTheme.grey25 };
   color : ${ extensionTheme.grey70};
   font-family:${ contentfulTheme.basicFont };
   font-size : 14px;
   border : 1px solid  ${ extensionTheme.grey35 };
   border-radius : 4px;
   padding : 10px;
   line-height : 11px;
   font-weight : 300;
   height : 33px;
   transition : background .2s ease, background-image .2s ease,opacity .2s ease-in-out,border-color .2s ease;
   width : fit-content;
   align-self : flex-end;
   opacity : 0.5;
   cursor : pointer;
   
   &:hover{
    background :  ${ extensionTheme.grey45 };
   }

   
   &.active{
    background : ${ extensionTheme.greenM };
   // background-image : -webkit-gradient(linear,left bottom,left top,from(#0eb87f),to(#14d997));
    background-size : 100% 200%;
    border : 1px solid  ${ extensionTheme.greenM };
    color : white;
    opacity : 1;
    
        &:hover{
          background : ${ extensionTheme.greenXL };
          background-image : transparent;
          cursor : pointer !important;
        }
    
    }
   
    &:focus {outline:0;}
`;
