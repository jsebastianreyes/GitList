import styled from 'styled-components'

const LanguageStyled = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;
  &:before {
    content: '';
    inline-size: 1rem;
    block-size: 1rem;
    border-radius: 50%;
    background: ${({ color }) => color};
  }
`

const languanges = {
  ruby: {
    color: 'orange'
  },
  css: {
    color: 'purple'
  },
  javascript: {
    color: 'yellow'
  },
  html:{
    color: 'chocolate'
  },
  python:{
    color: 'red'
  }
}

function Language({ name }) {
  const formattedName = name.toLowerCase()
  const color = languanges[formattedName] ? languanges[formattedName].color : 'salmon'


  return (
    <LanguageStyled color={color}>
      {name}
    </LanguageStyled>
  )
}

export default Language
