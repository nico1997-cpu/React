import { Screen } from './Screen.jsx'

export const Home = () => {
  const name = 'Nicolas Romero'
  const role = 'frontend developer'

  return (
    <Screen title="Inicio">
      <section className="hero">
        <div className="avatar">NR</div>
        <h2>{name}</h2>
        <p className="hero-role">{role}</p>
        <p className="hero-text">Mi primer portafolio en React con JSX.</p>
      </section>
    </Screen>
  )
}
