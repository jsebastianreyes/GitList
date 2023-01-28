import styled from 'styled-components'
import Language from './language'
import Icon from './icon'

const RepoItemStyled = styled.div`
  padding-block-end: 1.2rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  border-block-end: 1px solid var(--grey);
  &:last-child {
    border-block-end: none;
  }
  .title {
    display: flex;
    gap: 1rem;
    margin: 0;
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
  .public {
    border: 1px solid var(--grey);
    padding-inline: .5rem;
    padding-block: .125rem;
    font: var(--caption-regular);
    border-radius: .5rem;
  }
  .description {
    margin: 0;
    font: var(--body2-regular);
  }
  .topicList {
    display: flex;
    flex-wrap: wrap;
    gap: .35rem;
  }

  .topicItem {
    color: var(--primary);
    font: var(--caption-medium);
    background: #15223A;
    padding-inline: .75rem;
    padding-block: .25rem;
    border-radius: 2rem;
  }

  .details {
    display: flex;
    gap: 1rem;
    font: var(--caption-regular);
  }

  .details-item {
    display: flex;
    gap: .5rem;
    align-items: center;
    color: var(--grey-1);
    & span::first-letter {
      text-transform: uppercase;
    }
  }

    @media screen and (prefers-color-scheme: light) {
      .topicItem {
        color: var(--primary);
        background: #d5e8ff;
      }
      .details-item{
        color: var(--grey);
      }
    
}
`

function RepoItem(props) {
  const updatedAt = new Date(props.updated_at)
  const today = new Date()
  const diffMilliseconds = updatedAt - today
  const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24))
  const timeAgo = new Intl.RelativeTimeFormat('es').format(diffDays, 'days')
  return (
    <RepoItemStyled>
      <h3 className="title">
        <a href={props.html_url}>
          {props.name}
        </a>
        {
          !props.private ? (
            <span className='public'>Public</span>
          ) : null
        }
      </h3>
      {
        props.description ? (
          <p className='description'>
            {props.description}
          </p>
        ) : null
      }
      {
        props.topics.length ? (
          <div className="topicList">
            {
              props.topics.map(item => <span className='topicItem' key={item}>{item}</span>)
            }
          </div>
        ) : null
      }
      <div className="details">
        {
          props.language ? <Language name={props.language} /> : null
        }
        <span className="details-item">
          <Icon name="star" color={'var(--whiteIcon)'}/>
          <span>{props.stargazers_count}</span>
        </span>
        <span className="details-item">
          <Icon name="branch" color={'var(--whiteIcon)'} />
          <span>{props.forks_count}</span>
        </span>
        <span className="details-item">
          <span>{timeAgo}</span>
        </span>
      </div>

    </RepoItemStyled>
  )
}

export default RepoItem
