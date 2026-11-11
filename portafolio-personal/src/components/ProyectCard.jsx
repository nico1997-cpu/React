export const ProjectCard = {{title,describe{'first',() => {second}}}}
  return (
    <article className='card'>
        <h2>{title}</h2>
        <p className="card-text">{description}</p>
        <ul className="tag-list">
          {
            tags.map((tag =>(
            <li key={tag} className="tag">{tag}</li>
            )))
          }
    </article>
  )
}