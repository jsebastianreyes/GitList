import styled from 'styled-components'
import InputText from './input-text'
import Selector from './selector'
import Separator from './separator'


const FiltersStyled = styled.div`
  grid-area: filters;
  .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
  }
  .action-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: .5rem;
  }

  @media screen and (min-width: 768px) {
    .action-list{
      flex-direction: row;
    }
  }

  @media screen and (prefers-color-scheme: light) {
    .count {
     color: var(--black);
  }
  }

`

function Filters({ setSearch, setSelectType, repoList, setLanguage, setSort}) {
  
  let languages = Array.from(new Set(repoList.filter(item => item.language !==null).map(el => el.language)))
   
  function handleLanguage(e) {
    setLanguage(e.target.value)
    
  }

  function handleChange(event) {
    const value = event.target.value
    setSearch(value)
  }

  function handleType(event){
    const value = event.target.value
   setSelectType(value)
  }

  function handleSort(event){
    const value = event.target.value
    setSort(value)
  }

  return (
    <FiltersStyled>
      <h2 className="count">
        Repositories ({repoList.length})
      </h2>
      <div className="action-list">
        <InputText
          placeholder="Find a repository"
          type="search"
          onChange={handleChange}
        
        />
        <div className="select-list">

          <Selector onChange={handleType}>
            <option value="type" disabled>Type</option>
            <option value="all">All</option>
            <option value="forks">Forks</option>
          </Selector>
          <Selector onChange={handleLanguage}>
            <option value="lenguaje" disabled>Language</option>
            <option value="all">All</option>
            {
              languages.map(language => {
                return <option key={language} value={language}> {language} </option>
              })
            }
            
          </Selector>
          <Selector onChange={handleSort}>
            <option value="ordenar" disabled>Sort</option>
            <option value="updated">Last Update</option>
            <option value="name">Name</option>
          </Selector>
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  )
}

export default Filters
