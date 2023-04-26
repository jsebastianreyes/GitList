import styled from 'styled-components'
import RepoItem from './repo-item'
import NotFound from './not-found'
import { useState } from 'react'
const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

function RepoList({ repoList, search, selectType, language, sort }) {


  let list = [...repoList].sort((a,b) => new Date(b.updated_at) - new Date (a.updated_at))
  let busquedas = list.length


  if (search !== '' || language !== 'all' || selectType !== 'all' || sort !== 'updated') {
      const data = list.filter((item) => { 
      return item.name.search(search) >= 0  &&
      (language ===  'all' || item.language === language) && 
      (selectType === 'all' || item.forks_count >= 0)  
    })

      if(selectType !== 'all' && sort === 'updated') data.sort((a,b) => b.forks_count - a.forks_count )
      else if(sort === 'name' && selectType === 'all') data.sort((a, b) => a.name.localeCompare(b.name))

      busquedas = data.length 
      list = data
    }

            
    return (
      <RepoListStyled>
        
        {busquedas === 0 ? <NotFound/> : null}    
      {list.map((item) => {
        return <RepoItem {...item} key={item.id} />
      })}
    </RepoListStyled>
  )
}

export default RepoList