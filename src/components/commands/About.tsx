import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
  <p>
    Bonjour, je m'appelle <HighlightSpan>Nessyme</HighlightSpan>.
  </p>
  <p>
    Passionnée par l’informatique, j’ai choisi de me réorienter vers ce domaine en intégrant une formation de Technicienne Supérieure Systèmes et Réseaux, <br />
    que j’ai ensuite complétée par celle d'Administratrice d’Infrastructures Sécurisées.
    <br /><br />
    Au cours de mon parcours, j’ai développé des compétences en gestion des systèmes, administration réseau et sécurisation des infrastructures.
    <br /><br />
    Je suis actuellement à la recherche d’un poste de Technicienne Informatique ou d’Administratrice Systèmes et Réseaux junior, <br />
    afin de mettre en pratique mes compétences et continuer à évoluer dans un environnement technique stimulant.
  </p>
</AboutWrapper>
  );
};

export default About;
