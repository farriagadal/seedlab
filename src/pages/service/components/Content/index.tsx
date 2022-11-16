import Link from 'next/link'
import { Container, BtnContact, Title } from './styles'

const Content = ({ Body }: any) => {
  return (
    <>
      <Title>
        <label>Experiencia</label>
        <h2>Experiencia</h2>
      </Title>
      <Container id="content">
        <ul>
          <li>NTT DATA - Senior Frontend Developer <br />
            <p>Mar 2022 - Present · 9 mosMar 2022 - Present · 9 mos <br /><br />
          • Lideré la integración con Google Looker y React.js para la visualización de dashboards para LATAM Airlines, lo cuál significó la renovación del contrato del cliente con la empresa gracias a los buenos resultados.<br /><br />
          • Lideré el desarrollo Front-End de plataforma web en React.js para administración y gestión de personal médico de "Clínica Las Condes".<br /><br />
          • Aumenté la convertura de Tests Unitarios de 20% a 80% de Front-End en React.js de plataforma web existente de "Clínica Alemana".• Lideré la integración con Google Looker y React.js para la visualización de dashboards para LATAM Airlines, lo cuál significó la renovación del contrato del cliente con la empresa gracias a los buenos resultados. • Lideré el desarrollo Front-End de plataforma web en React.js para administración y gestión de personal médico de "Clínica Las Condes". • Aumenté la convertura de Tests Unitarios de 20% a 80% de Front-End en React.js de plataforma web existente de "Clínica Alemana".…see more<br /><br />
          Stacks: React.js · Docker</p>
          </li>

          <li>MEAT Group | Marketing y Comunicación - Front-End Developer Semi-Senior <br />
            <p>Sep 2020 - Mar 2022 · 1 yr 7 mosSep 2020 - Mar 2022 · 1 yr 7 mos <br /><br />
            • Desarrollé una plataforma web para supervisión y gestión desucursales THE LINE. Implementé pruebas unitarias con Jest. <br /><br />
            • Desarrollé la plataforma de tickets para el "Teatro Municipal de Santiago", donde lideré la integración con la API de venta de boletos. El desarrollo fue realizado en Nuxt.js para optimización de SEO. <br /><br />
            • Desarrollé un plugin de wordpress para agregar mapas de OpenStreetMaps con la ubicación de las tiendas. <br /><br />
            • Realicé mantención de App mobile de Banco de Chile. Tecnologías usadas: VueJs y Cordova. <br /><br />
            • Otros desarrollos y mantenciones de websites y web apps.• Desarrollé una plataforma web para supervisión y gestión desucursales THE LINE. Implementé pruebas unitarias con Jest. • Desarrollé la plataforma de tickets para el "Teatro Municipal de Santiago", donde lideré la integración con la API de venta de boletos. El desarrollo fue realizado en Nuxt.js para optimización de SEO. • Desarrollé un plugin de wordpress para agregar mapas de OpenStreetMaps con la ubicación de las tiendas. • Realicé mantención de App mobile de Banco de Chile. Tecnologías usadas: VueJs y Cordova. • Otros desarrollos y mantenciones de websites y web apps  <br /><br />
            Stacks: Vue.js · React.js · Docker
            </p></li>
          <li>Opting IT Solutions - Software Engineer<br />
            <p>
              Sep 2018 - Jun 2020 · 1 yr 10 mosSep 2018 - Jun 2020 · 1 yr 10 mos <br /><br />
              • Lideré una célula ágil como Scrum Master.<br /><br />
                • Mantuve relación estrecha con clientes para la documentación de requerimientos y presentación de avances.<br /><br />
                • Colaboré en la capacitación de nuevos desarrolladores sugiriendo cursos, con desarrollo pair-coding y revisando el código según metodologías de desarrollo y buenas prácticas.
              <br /><br />
                • Colaboré en el desarrollo de distintos softwares a medidas para clientes.• Lideré una célula ágil como Scrum Master. • Mantuve relación estrecha con clientes para la documentación de requerimientos y presentación de avances. • Colaboré en la capacitación de nuevos desarrolladores sugiriendo cursos, con desarrollo pair-coding y revisando el código según metodologías de desarrollo y buenas prácticas. • Colaboré en el desarrollo de distintos softwares a medidas para clientes.…see more
              <br /><br />
                Stacks: Docker · Python · Angular
            </p>
          </li>

          <li>
          GTD Ingenieros Consultores Ltda. - Memorista Memorista <br />
            <p>
            Jan 2018 - Apr 2018 · 4 mosJan 2018 - Apr 2018 · 4 mos <br /><br />
            • Desarrollé un algoritmo matemático en Python para la automatización de estudios de obras de movimiento de tierras. El software fué utilizado en distintos proyectos con excelentes resultados.• Desarrollé un algoritmo matemático en Python para la automatización de estudios de obras de movimiento de tierras. El software fué utilizado en distintos proyectos con excelentes resultados. <br /><br />
              Stacks: Python
            </p>
          </li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link href="/contacto">
          <BtnContact>DESCARGAR CV</BtnContact>
        </Link>
      </Container>
    </>
  )
}

export default Content