import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Voici quelques projets réalisés dans mon homelab, autour de la virtualisation, du réseau et de la sécurité. <br />
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Mise en place d’une infrastructure virtualisée avec Proxmox",
    desc: "Dans le cadre de mon homelab, j’ai installé Proxmox puis configuré l’environnement afin de le rendre fonctionnel et sécurisé. J’ai notamment défini une adresse IP statique, créé un utilisateur dédié afin d’éviter l’utilisation du compte root, et importé le certificat TLS dans mon navigateur pour sécuriser l’accès à l’interface. J’ai également adapté les dépôts pour permettre les mises à jour sans souscription, et déployé plusieurs machines virtuelles, dont un pare-feu OPNsense pour le filtrage du trafic. L’infrastructure a été organisée avec la mise en place de VLAN pour segmenter le réseau, ainsi que la création de templates afin d’uniformiser le déploiement des machines virtuelles. J’ai aussi appris à gérer le stockage, notamment via l’ajout de disques aux VM.",
    url: "https://github.com/LibRComm/LibRComm.github.io/proxmox-homelab",
  },
  {
    id: 2,
    title: "Sécurisation réseau avec OPnsense",
    desc: "Déploiement d’un firewall OPNsense avec configuration du routage, du NAT, des règles de sécurité et mise en place de services avancés (VPN, DNS sécurisé, IDS/IPS).",
    url: "https://github.com/LibRComm/LibRComm.github.io/proxmox-homelab",
  },
  {
    id: 3,
    title: "Mise en place et sécurisation d’un outil de supervision réseau (ntopng)",
    desc: "Dans le cadre de mon homelab, j’ai déployé ntopng afin d’analyser et superviser le trafic réseau en temps réel. J’ai également renforcé la sécurité de l’accès à l’interface en mettant en place un certificat TLS généré avec mkcert. Enfin, j’ai appliqué des bonnes pratiques de sécurisation pour protéger l’outil et limiter les accès non autorisés.",
    url: "https://github.com/LibRComm/LibRComm.github.io/proxmox-homelab",
  },
  {
    id: 4,
    title: "Mettre en place un réseau Mesh",
    desc: "Connecter deux cartes LoRa 32.",
    url: "https://github.com/LibRComm/LibRComm.github.io/proxmox-homelab",
  },
];

export default Projects;
