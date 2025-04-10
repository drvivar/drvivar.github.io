import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Psicoterapia online y presencial · Especialista en salud mental">
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <section id="hero" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <img
            id="logo-home"
            src="/img/logo.png"
            alt="Logotipo Dr. Alejandro G. G. Vivar"
          />
          <br />
          <br />
          <img
            id="logo-text"
            src="/img/logo-text.png"
            alt="Dr. Alejandro G. G. Vivar"
          />
          <br />
          <br />
          <p style={{ fontSize: '1.2rem' }}>
            <b>Doctor</b> en Psicología Clínica y de la Salud
            <br />
            <b>Psicólogo</b> General Sanitario
          </p>
          <a href="#contacto">
            <button>Pide tu cita</button>
          </a>
        </section>

        <section id="sobre-mi">
          <h2>Sobre mí</h2>
          <p>
            Soy psicólogo especializado en salud mental, con más de 8 años de experiencia trabajando en el campo de la Psicología Clínica y a través de diferentes vertientes: tecnología, investigación, docencia y consultoría.
          </p>
          <ul>
            <li>Doctor en Psicología Clínica y de la Salud, Universitat de Barcelona.</li>
            <li>Máster Universitario en Psicología General Sanitaria, Universitat Oberta de Catalunya.</li>
            <li>Máster Universitario en Antropología Aplicada, Salud y Desarrollo Comunitario, Universidad de Salamanca.</li>
            <li>Máster en Terapia Cognitivo Social, Universitat de Barcelona.</li>
            <li>Posgrado en Hipnosis Clínica, Universitat de Barcelona.</li>
          </ul>
          <p>Y además:</p>
          <ul>
            <li>Investigador con varios artículos publicados en revistas académicas de impacto.</li>
            <li>Profesor en la Universitat de Barcelona, Universitat Oberta de Catalunya y Universidad Isabel I, en asignaturas como Psicopatología o Psicología Clínica.</li>
            <li>Desarrollador de varias herramientas digitales para la evaluación psicológica. Creador: mymonitorapp.com | Colaborador: eyme-vr.com</li>
          </ul>
        </section>

        <br />

        <section id="servicios">
          <h2>Servicios</h2>
          Tanto <i>online</i> como presencial:
          <ul>
            <li>Consultoría individual para adultos</li>
            <li>Consultoría para pareja</li>
          </ul>
        </section>

        <br />

        <section id="precio">
          <h2>Precio</h2>
          <p>Tanto <i>online</i> como presencial:<b> 60 € por sesión</b></p>
        </section>

        <br />

        <section id="como-trabajo">
          <h2>Cómo trabajo</h2>
          <p>Entiendo los problemas de salud mental como crisis que se producen en el proceso de desarrollo y adaptación de las personas.</p>
          <p>Firme defensor de una intervención propiamente psicológica, en contra de la perspectiva biológica y médica dominante.</p>
          <ul>
            <li>Desde la psicología humanista, enfatizo la importancia de la relación terapéutica como vehículo para el desarrollo del potencial del consultante.</li>
            <li>Desde la psicología sistémica, recojo la importancia de la estructura familiar y los procesos de comunicación.</li>
            <li>Desde la psicología cognitiva, hago hincapié en cómo el ser humano interpreta y construye la realidad.</li>
            <li>Desde la psicología de la conducta, me interesa la historia de aprendizaje del consultante y la relación entre el comportamiento y el entorno.</li>
            <li>Desde el psicoanálisis, valoro la importancia de los conflictos que surgen entre el deber y el deseo.</li>
          </ul>
        </section>

        <br />

        <section id="contacto">
          <h2>Contacto</h2>
          {/* <p>Puedes escribirme a <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a></p>
          <p>O contactarme directamente por <a href="https://wa.me/XXXXXXXXXXX">WhatsApp</a></p> */}
          <p>Próximamente...</p>
        </section>
      </main>
    </Layout>
  );
}
