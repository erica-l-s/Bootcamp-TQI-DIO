import React, { useEffect, useState } from "react"
import useGithub from "../../hooks/github-hooks"
import RepositoryItem from "../repository-item"
import * as S from './styled'

function Repositories() {

    const {gitHubState, getUserRepos,getUserStarred} = useGithub()
    const [hasUserForSearch,setUserForSeachRepos] = useState(false)

    useEffect(()=>{
        if(gitHubState.user.login){
            getUserRepos(gitHubState.user.login)
            getUserStarred(gitHubState.user.login)
            
        }
        setUserForSeachRepos(gitHubState.repositories)
    
  
    },[gitHubState.user])
        
    
    return(
        <>

       {hasUserForSearch ? (
        
        <S.WrapperTabs
         selectedTabClassName="is-selected" 
         selectedTabPanelClassName="is-selected">
         <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>

            <S.WrapperTabPanel>
           <S.WrapperList>
                {gitHubState.repositories.map((item)=>(
                     <RepositoryItem
                     key={item.id} 
                     name={item.name}
                     linkToRepo ={item.full_name}
                     fullName = {item.full_name}
                      />

                ))}
                </S.WrapperList>
           
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
            <S.WrapperList>
                {gitHubState.starred.map((item)=>(
                     <RepositoryItem
                     key= {item.id} 
                     name= {item.name}
                     linkToRepo = {item.full_name}
                     fullName = {item.full_name}
                      />

                ))}
                </S.WrapperList>
           
            </S.WrapperTabPanel> 

        </S.WrapperTabs>
       ): <></> }</>
    )
}

export default Repositories