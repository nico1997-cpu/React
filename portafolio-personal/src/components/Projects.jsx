import { Screen } from "./Screen"
import { ProjectCard } from "./ProyectCard"

const projects = [
  {
    id: 1,
    title: 'Laboratorio SENA (Actual)',
    description: 'Desarrollo en Python y manejo de agentes de Inteligencia Artificial.',
    tags: ['Python', 'Inteligencia Artificial', 'SENA'],
  },
  {
    id: 2,
    title: 'Mi Portafolio Personal',
    description: 'Hoja de vida y portafolio web desarrollado con React y Vite.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 3,
    title: 'Asesor Comercial de Telefonía (Movistar) | Multienlaces S.A.S',
    description: 'Abril 2024 – Abril 2025. Fidelización de clientes y venta de servicios móviles y de hogar. Comunicación efectiva y manejo de objeciones.',
    tags: ['Atención al Cliente', 'Ventas', 'Comunicación'],
  },
  {
    id: 4,
    title: 'Encuestador SISBEN | Secretaría de Planeación de Calarcá',
    description: 'Octubre 2023 – Diciembre 2023. Recolección y captura rigurosa de información en sectores urbanos y rurales.',
    tags: ['Captura de Datos', 'Análisis', 'Trabajo de Campo'],
  },
  {
    id: 5,
    title: 'Supernumerario (mesero y logística) | Finca Hotel y Restaurante La Rivera',
    description: 'Diciembre 2021 – Junio 2023. Atención integral al cliente, multitarea y resolución de problemas bajo presión.',
    tags: ['Servicio al Cliente', 'Logística', 'Trabajo en Equipo'],
  },
  {
    id: 6,
    title: 'Asesor Comercial con venta cruzada | Comdata Group',
    description: 'Año 2018. Gestión comercial y atención a usuarios.',
    tags: ['Ventas', 'Atención al Cliente'],
  },
  {
    id: 7,
    title: 'Instalador de Antenas TDT | Rohde & Schwarz Colombia S.A.',
    description: 'Año 2017. Instalación y soporte técnico de equipos de televisión digital terrestre.',
    tags: ['Electrónica', 'Soporte Técnico', 'TDT'],
  },
  {
    id: 8,
    title: 'Auxiliar de Mantenimiento y Elaborador de Indicadores | Berhlan de Colombia SAS',
    description: '2016 – 2017. Apoyo en mantenimiento electrónico/industrial y seguimiento de indicadores.',
    tags: ['Mantenimiento', 'Indicadores', 'Electrónica'],
  },
]

export const Projects = () => {
  return (
    <Screen title="Proyectos y Experiencia">
      <div className="card-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </Screen>
  )
}
