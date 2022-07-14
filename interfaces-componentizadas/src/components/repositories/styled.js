import styled from "styled-components";
import{Tabs,TabList,Tab,TabPanel} from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
font-size:16px;
width:100%;
margin-top:16px;
`
export const WrapperTabList = styled(TabList)`
list-style-type:none;
padding:4px;
display:flex;
margin:0;
`
WrapperTabList.tabsRole = "TabList"

export const WrapperTab = styled(Tab)`
border-radius:16px;
border:1px solid #E6E6FA;
padding:10px;
user-select:none;
cursor: pointer;
z-index:99999;
background-color:#fff;
margin:8px;

&:focus{
    outline:none;
    
}

&.is-selected{
   box-shadow:5px 3px 8px rgba(131,111,255,0.5);
}
`
WrapperTab.tabsRole = "Tab"

export const WrapperTabPanel = styled(TabPanel)`
display:none;
padding:8px;
margin-top:-5px;



&.is-selected{
    display:block;
}
`
WrapperTabPanel.tabsRole = "TabPanel"

export const WrapperList = styled.div`
display:flex;
flex-wrap:wrap;

h2,h4{
  font-weight:bold;
}

a{
    color:gray;
    font-style:italic;
}

`
