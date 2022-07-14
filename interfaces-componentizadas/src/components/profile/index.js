import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from './styled';

const Profile = () => {

const {gitHubState} = useGithub()

    return(
        <S.Wrapper>
                      
    <S.WrapperImage src={gitHubState.user.avatar} alt='avatar of user'/>
     <S.WrapperInfoUser>
     <div>
     <h1>{gitHubState.user.name}</h1>
      <S.WrapperUsername>
     <h3>Username:</h3>
     <a href={gitHubState.user.html_url} target="_blank" rel="noreferrer">{gitHubState.user.login}</a>
     </S.WrapperUsername>
     </div>
     <S.WrapperUsername>
     <h3>Company:</h3>
     <span>{gitHubState.user.company}</span>
     </S.WrapperUsername>
     <S.WrapperUsername>
     <h3>Location:</h3>
     <span>{gitHubState.user.location}</span>
     </S.WrapperUsername>  
     <S.WrapperUsername>
     <h3>Blog:</h3>
     <a href={gitHubState.user.blog} target="_blank" rel="noreferrer">{gitHubState.user.blog}</a>
     </S.WrapperUsername>    
     <S.WrapperStatusCount>
      <div>
       <h3>Followers</h3>
       <span>{gitHubState.user.followers} </span>
      </div>
      <div>
       <h3>Followings</h3>
       <span>{gitHubState.user.following} </span>
      </div>
      <div>
       <h3>Gists</h3>
       <span>{gitHubState.user.public_gists} </span>
      </div>
      <div>
       <h3>Repos</h3>
       <span>{gitHubState.user.public_repos} </span>
      </div>
      
     </S.WrapperStatusCount>

     </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile