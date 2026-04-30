import { Wrapper } from "../styles/Output.styled";

const Skills: React.FC = () => {
  return (
    <Wrapper data-testid="skills">
      <p>Compétences techniques :</p>
      <br />

      <p>🖥️ Systèmes :</p>
      <p>- Windows</p>
      <p>- Linux (administration de base)</p>

      <br />

      <p>🏢 Environnements Microsoft :</p>
      <p>- Active Directory :</p>
      <p>- Microsoft 365 :</p>

      <br />

      <p>🗄️ Bases de données :</p>
      <p>- MySQL</p>
      <p>- MariaDB</p>

      <br />

      <p>⚙️ Virtualisation :</p>
      <p>- VMware ESXi / Workstation</p>
      <p>- Proxmox</p>
      <p>- VirtualBox</p>

      <br />

      <p>🌐 Réseaux :</p>
      <p>- TCP/IP, DNS, DHCP</p>
      <p>- VPN :</p>
      <p>  • WireGuard (configuration en environnement de test)</p>
      <p>  • OpenVPN (mise en place de connexions sécurisées)</p>
      <p>- Firewall :</p>
      <p>  • pfSense</p>
      <p>  • OPNsense</p>
      <p>  • Notions sur Fortigate</p>

      <br />

      <p>📊 Supervision :</p>
      <p>- Zabbix</p>
      <p>- PRTG</p>

      <br />

      <p>⚙️ Infrastructure as Code :</p>
      <p>- Packer</p>
      <p>- Terraform</p>
      <p>- Ansible</p>

      <br />

      <p>🔐 Cybersécurité :</p>
      <p>- Nmap (scan réseau)</p>
      <p>- Greenbone (audit de vulnérabilités)</p>

      <br />

      <p>🛠️ ITSM :</p>
      <p>- GLPI</p>
      <p>- ManageEngine</p>
    </Wrapper>
  );
};

export default Skills;
