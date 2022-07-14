import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from './styled'

function Header(){

    const{getUser} = useGithub()
    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () =>{

        if(!usernameForSearch)
        return;
       return getUser(usernameForSearch)
    }
 return(
    <header>
    <S.Wrapper>
        <input type='text' placeholder="Digite o Username para pesquisar..."  onChange={(event)=>setUsernameForSearch(event.target.value)}/>
        <button onClick={submitGetUser} type="submit">Buscar</button>
    </S.Wrapper>
        </header>
 )
}

export default Header