import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
    _   _                 _                 
   | \\ | | ___  ___ _   _| |__   ___  _ __  
   |  \\| |/ _ \\/ __| | | | '_ \\ / _ \\| '_ \\ 
   | |\\  |  __/ (__| |_| | |_) | (_) | | | |
   |_| \\_|\\___|\\___|\\__,_|_.__/ \\___/|_| |_|

                 NESSYME
          `}
        </PreName>

        <PreWrapper>
          <PreNameMobile>
            {`
    _   _                 
   | \\ | | ___  ___      
   |  \\| |/ _ \\/ __|     
   | |\\  |  __/ (__      
   |_| \\_|\\___|\\___|     

        NESSYME
          `}
          </PreNameMobile>
        </PreWrapper>

        <div>Bienvenue sur mon portfolio terminal !</div>

        <Seperator>----</Seperator>

        <div>
          Tape `help` pour afficher la liste des commandes disponibles.
        </div>
      </div>

      {/* ✅ fermeture correcte de info-section + séparation claire */}

      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
