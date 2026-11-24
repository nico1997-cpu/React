import { Screen } from './Screen.jsx'
import fotoPerfil from '../assets/hoja de vida.jpg'

export const Home = () => {
  const name = 'Nicolás Romero Duque'
  const role = 'Estudiante de Tecnología en Análisis y Desarrollo de Software'

  return (
    <Screen title="Inicio">
      <section className="hero">
        <img src={fotoPerfil} alt={name} className="avatar-img" />
        <h2>{name}</h2>
        <p className="hero-role">{role}</p>
        <p className="hero-sub">
          Calarcá, Quindío | 313 782 3530 | Misternico1997@gmail.com
        </p>
        <p className="hero-text">
          Estudiante de Tecnología en Análisis de Datos y Desarrollo de Software,
          con base en lógica de programación y herramientas de Inteligencia Artificial.
          Proactivo, responsable y con experiencia certificada en atención al cliente,
          lo que le permite comunicar soluciones técnicas de forma clara y orientada a
          resultados. Capacidad de trabajo autónomo y colaborativo, enfocado en la
          creación de soluciones digitales eficientes.
        </p>
      </section>

      <div className="card-list home-sections">
        <article className="card">
          <h2>Datos Personales</h2>
          <ul className="info-list">
            <li><strong>Documento de identidad:</strong> 1.097.405.697</li>
            <li><strong>Fecha de nacimiento:</strong> 16 de abril de 1997</li>
            <li><strong>Estado civil:</strong> Soltero</li>
            <li><strong>Libreta militar:</strong> Primera clase, conducta excelente</li>
            <li><strong>Dirección:</strong> Carrera 27 # 36 - 47, Centro, Calarcá, Quindío</li>
          </ul>
        </article>

        <article className="card">
          <h2>Formación Académica</h2>
          <ul className="info-list">
            <li>
              <strong>En curso:</strong> Tecnología en Análisis y Desarrollo de Software (ADSO) – SENA
            </li>
            <li>
              <strong>Estudios técnicos:</strong> Técnico en Mantenimiento Electrónico a Equipos Domésticos y de Pequeña Industria – SENA, Armenia (2013 - 2014)
            </li>
            <li>
              <strong>Educación media:</strong> Bachiller Técnico en Electrónica y Mantenimiento de Computadores – Instituto Tecnológico, Calarcá (2011 - 2013)
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>Habilidades Técnicas</h2>
          <ul className="info-list">
            <li><strong>Lenguajes de programación:</strong> Java, Python, JavaScript, HTML y CSS.</li>
            <li><strong>Bases de datos:</strong> MySQL.</li>
            <li><strong>Frameworks en formación:</strong> Angular (frontend) y Spring Boot (backend).</li>
            <li><strong>Laboratorio SENA (actual):</strong> Desarrollo en Python y manejo de agentes de Inteligencia Artificial.</li>
          </ul>
          <ul className="tag-list">
            <li className="tag">Java</li>
            <li className="tag">Python</li>
            <li className="tag">JavaScript</li>
            <li className="tag">HTML</li>
            <li className="tag">CSS</li>
            <li className="tag">MySQL</li>
            <li className="tag">Angular</li>
            <li className="tag">Spring Boot</li>
            <li className="tag">React</li>
            <li className="tag">Agentes IA</li>
          </ul>
        </article>

        <article className="card">
          <h2>Habilidades y Formación Complementaria</h2>
          <p className="card-text"><strong>Tecnología y Desarrollo de Software:</strong></p>
          <ul className="info-list">
            <li>Desarrollo con IA (BIG school), Desarrollo de Apps Móviles (Google), Ciberseguridad y Hacking Ético (BIG school).</li>
            <li>Fundamentos de HTML, CSS y JavaScript (Cisco Networking Academy), Programación de Microcontroladores PIC (SENA).</li>
          </ul>
          <p className="card-text"><strong>Atención al Cliente y Habilidades Blandas:</strong></p>
          <ul className="info-list">
            <li>Atención y Servicio al Cliente – Comfenalco Quindío (60 horas).</li>
            <li>Emprendimiento – SENA. Inglés básico (Dot Works Beginner) – SENA.</li>
          </ul>
        </article>
      </div>
    </Screen>
  )
}
