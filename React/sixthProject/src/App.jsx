import Card from "./components/Card";
import starWars1 from "./assets/starWars1.jpg";
import starWars2 from "./assets/starWars2.jpg";
import starWars3 from "./assets/starWars3.jpg";

export default function App() {
  return (
    <>
      <Card
        title="Pôster: Star Wars (1977)"
        posterImg={starWars1}
        paragraph={
          "Em Star Wars - Episódio IV, o jovem Luke Skywalker (Mark Hamill) sonha ir para a Academia como seus amigos, mas se vê envolvido em uma guerra intergalática quando seu tio compra dois robôs e com eles encontra uma mensagem da princesa Leia Organa (Carrie Fisher) para o Jedi Obi-Wan Kenobi (Alec Guinness) sobre os planos da construção da Estrela da Morte, uma gigantesca estação espacial com capacidade para destruir um planeta. Luke então se junta aos cavaleiros Jedi e a Han Solo (Harrison Ford), um mercenário, para tentar destruir esta terrível ameaça ao lado dos membros da resistência."
        }
      />
      <Card
        title="Pôster: Empire Strikes Back (1980)"
        posterImg={starWars2}
        paragraph={
          "Em Star Wars: Episódio VII, décadas após a queda de Darth Vader e do Império, surge uma nova ameaça: a Primeira Ordem, uma organização sombria que busca minar o poder da República e que tem Kylo Ren (Adam Driver), o General Hux (Domhnall Gleeson) e o Líder Supremo Snoke (Andy Serkis) como principais expoentes."
        }
      />
      <Card
        title="Pôster: Return of the Jedi (1983)"
        posterImg={starWars3}
        paragraph={
          "Star Wars: The Force Awakens (also known as Star Wars: Episode VII  The Force Awakens) is a 2015 American epic space opera film co-produced, co-written, and directed by J. J. Abrams. The sequel to Return of the Jedi (1983), it is the seventh film in the 'Skywalker Saga'. Set thirty years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solo's search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire. The ensemble cast includes Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyong'o, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, and Max von Sydow."
        }
      />
    </>
  );
}
