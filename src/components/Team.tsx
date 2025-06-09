import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import team1img from '../assets/team1.webp'
import team2img from '../assets/team2.webp'
import team3img from '../assets/team3.webp'
import team4img from '../assets/team4.webp'


interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: team1img,
    name: "Thomas G.",
    position: "CEO - Responsable Partenariats"
  },
  {
    imageUrl: team2img,
    name: "Camille L.",
    position: "Juriste Immobilier",
  },
  {
    imageUrl: team3img,
    name: "Romain C.",
    position: "Développeur Produit"
  },
  {
    imageUrl: team4img,
    name: "Nora B.",
    position: "Chargée de communication"
  },
];

export const Team = () => {
  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          L’équipe{" "}
        </span>
        derrière PRÉFÉRENCE
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Nous combinons expertise juridique, connaissance du marché et simplicité
        d’usage pour rendre accessible le droit de préférence immobilier.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, position }) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              {name === "Thomas G." && (
                <p>
                  Thomas est en charge de la relation avec les propriétaires et les intermédiaires locaux. Il identifie les biens à fort potentiel et initie les discussions sur le droit de préférence.
                </p>
              )}
              {name === "Camille L." && (
                <p>
                  Camille structure les contrats et s’assure que chaque droit de préférence respecte un cadre légal clair et équilibré pour les deux parties.
                </p>
              )}
              {name === "Romain C." && (
                <p>
                 Romain développe les outils internes de PRÉFÉRENCE : interface de gestion, notifications, suivi des engagements et mise en relation sécurisée.
                </p>
              )}
              {name === "Nora B." && (
                <p>
Nora veille à la clarté de nos messages et à la cohérence de notre image auprès des acheteurs, des propriétaires et des partenaires. Elle s’assure que chaque étape soit compréhensible et rassurante.

                </p>
              )}
            </CardContent>

            <CardFooter>

            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
