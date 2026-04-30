import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <p>Formation :</p>
      <br />

      <p>🎓 Titre professionnel Administratrice d’Infrastructures Sécurisées</p>
      <p>- Simplon Valenciennes</p>
      <p>- Niveau 6 (Bac +3/4)</p>
      <p>- 2023 – 2024</p>

      <br />

      <p>🎓 Titre professionnel Technicienne Supérieure Systèmes et Réseaux</p>
      <p>- Simplon Valenciennes</p>
      <p>- Niveau 5 (Bac +2)</p>
      <p>- 2022 – 2023</p>

      <br />

      <p>🎓 DEUG d’Histoire</p>
      <p>- Université Rennes 2</p>
      <p>- Niveau Bac +2</p>
      <p>- 2013</p>
    </Wrapper>
  );
};

export default Education;
