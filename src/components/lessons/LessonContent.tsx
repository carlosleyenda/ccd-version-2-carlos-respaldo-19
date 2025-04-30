
import React from 'react';
import { Separator } from "@/components/ui/separator";

const LessonContent = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2>Conceptos Fundamentales de Minería Subterránea</h2>
      
      <p>
        La minería subterránea es una de las formas más complejas y desafiantes de extraer recursos minerales. A diferencia de la minería a cielo abierto, involucra la excavación de túneles y cavidades bajo la superficie terrestre para acceder a los yacimientos minerales.
      </p>
      
      <h3>Principios básicos</h3>
      
      <p>
        Los sistemas de minería subterránea se clasifican generalmente según el método de extracción utilizado, que depende de:
      </p>
      
      <ul>
        <li>La geometría del yacimiento mineral</li>
        <li>Las condiciones geológicas del entorno</li>
        <li>Factores económicos y de seguridad</li>
        <li>Consideraciones ambientales</li>
      </ul>
      
      <p>
        Para comprender adecuadamente estos sistemas, es fundamental entender la terminología técnica asociada a las operaciones subterráneas.
      </p>
      
      <Separator className="my-4" />
      
      <h3>Métodos de acceso</h3>
      
      <p>
        Existen tres métodos principales para acceder a los depósitos minerales subterráneos:
      </p>
      
      <ol>
        <li>
          <strong>Pozos verticales:</strong> Excavaciones verticales desde la superficie hasta el nivel de la veta mineral. Son eficientes para yacimientos profundos.
        </li>
        <li>
          <strong>Rampas:</strong> Túneles inclinados que permiten el acceso de vehículos y equipos. Ideales para operaciones que requieren movilidad de equipos pesados.
        </li>
        <li>
          <strong>Túneles horizontales:</strong> También llamados socavones o galerías, son utilizados cuando el yacimiento está ubicado en una ladera o montaña.
        </li>
      </ol>
      
      <h3>Sistemas de soporte</h3>
      
      <p>
        El soporte de terreno es crítico en la minería subterránea para prevenir derrumbes y garantizar la seguridad. Los métodos más comunes incluyen:
      </p>
      
      <ul>
        <li>Pernos de anclaje</li>
        <li>Mallas metálicas</li>
        <li>Hormigón proyectado (shotcrete)</li>
        <li>Cuadros de madera o metálicos</li>
        <li>Relleno con material estéril</li>
      </ul>
      
      <h3>Ventilación</h3>
      
      <p>
        Un sistema de ventilación eficiente es esencial para:
      </p>
      
      <ul>
        <li>Proporcionar aire respirable a los trabajadores</li>
        <li>Diluir y extraer gases tóxicos</li>
        <li>Controlar el polvo en suspensión</li>
        <li>Regular la temperatura y humedad</li>
      </ul>
      
      <p>
        La comprensión de estos conceptos fundamentales es la base para el desarrollo exitoso de operaciones mineras subterráneas seguras y eficientes.
      </p>
    </div>
  );
};

export default LessonContent;
