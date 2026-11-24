import { Screen } from './Screen.jsx'

export const Contact = () => {
  return (
    <Screen title="Contacto">
      <ul className="contact-list">
        <li>
          <a className="contact-link" href="mailto:Misternico1997@gmail.com">
            <strong>Correo:</strong> Misternico1997@gmail.com
          </a>
        </li>
        <li>
          <a className="contact-link" href="tel:+573137823530">
            <strong>Teléfono:</strong> 313 782 3530
          </a>
        </li>
        <li>
          <div className="contact-link">
            <strong>Dirección:</strong> Carrera 27 # 36 - 47, Centro, Calarcá, Quindío
          </div>
        </li>
        <li>
          <div className="card">
            <h2>Referencias Personales</h2>
            <ul className="info-list">
              <li>
                <strong>José David Duran López:</strong> Ingeniero Electrónico, docente Instituto Calarcá — Tel: 312 449 3674
              </li>
              <li>
                <strong>Santiago Ortiz Suarez:</strong> Desarrollador Fullstack & Cloud — Tel: 304 4922417
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </Screen>
  )
}
