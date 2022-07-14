import React from "react";
import * as S from './styled';
import Header from "../header";
import useGithub from "../../hooks/github-hooks";

function Layout({children}){
    const {gitHubState} = useGithub()

    return(
        <S.WrapperLayout>
           <Header/>
           {gitHubState.loading ? <p>Loading</p> : <>{children}</>}
           
           
        </S.WrapperLayout>
    )
}

export default Layout