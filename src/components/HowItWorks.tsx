import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Vous ciblez un bien ou une zone",
    description:
      "Vous repérez un bien, une rue, ou un quartier tendu ? Vous nous indiquez vos critères de préférence.",
  },
  {
    icon: <MapIcon />,
    title: "On approche le propriétaire",
    description:
      "Nous contactons le propriétaire pour lui proposer un droit de préférence. Il reste libre de vendre ou non.",
  },
  {
    icon: <PlaneIcon />,
    title: "Un contrat encadre la priorité",
    description:
      "Si le vendeur accepte, un contrat est signé : s’il décide de vendre dans les années à venir, vous serez prioritaire.",
  },
  {
    icon: <GiftIcon />,
    title: "Une prime sans vente",
    description:
      "Le propriétaire touche une prime immédiate, sans mise en vente ni engagement de prix. Vous sécurisez votre avance.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Comment{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          ça fonctionne{" "}
        </span>
        avec <em>preference</em>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Un processus simple, contractuel, humain — pour vous donner une longueur d’avance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
