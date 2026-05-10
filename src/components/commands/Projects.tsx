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
    desc: "Installation et sécurisation de Proxmox dans mon homelab : déploiement de VM (dont un pare-feu OPNsense), segmentation du réseau, gestion des utilisateurs, sécurisation des accès et intégration de Proxmox Backup notamment.",
    url: "https://github.com/LibRComm/LibRComm.github.io-/wiki/%23-Proxmox",
  },
  {
    id: 2,
    title: "Sécurisation réseau avec OPnsense",
    desc: "Déploiement d’un firewall OPNsense avec configuration du routage, du NAT, des règles de sécurité et mise en place de services avancés (VPN, DNS sécurisé, IDS/IPS).",
    url: "https://github.com/LibRComm/LibRComm.github.io-/wiki/%23-OPNsense",
  },
  {
    id: 3,
    title: "Centralisation et supervision des logs avec Graylog",
    desc: "Mise en place d’un serveur Graylog pour centraliser les logs de l’infrastructure virtuelle du homelab. Collecte des événements provenant d'OPNsense et des VM, création de dashboards et expérimentation autour de la détection d’anomalies et de la supervision de sécurité.",
    url: "https://github.com/LibRComm/LibRComm.github.io-/wiki/%23-Graylog",
  },
  {
    id: 4,
    title: "Mise en place et sécurisation d’un outil de supervision réseau (ntopng)",
    desc: "Dans le cadre de mon homelab, j’ai déployé ntopng afin d’analyser et superviser le trafic réseau en temps réel. J’ai également renforcé la sécurité de l’accès à l’interface en mettant en place un certificat TLS généré avec mkcert. Enfin, j’ai appliqué des bonnes pratiques de sécurisation pour protéger l’outil et limiter les accès non autorisés.",
    url: "https://github.com/LibRComm/LibRComm.github.io/proxmox-homelab",
  },
];

export default Projects;
