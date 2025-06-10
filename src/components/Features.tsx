import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/feature1.jpg";
import image3 from "../assets/feature2.jpg";
import image4 from "../assets/feature3.jpg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Exprimez vos préférences",
    description:
      "Indiquez en quelques clics les biens que vous aimeriez acquérir si un jour ils étaient mis en vente — même s’ils ne le sont pas aujourd’hui.",
    image: image4,
  },
  {
    title: "Accordez-vous un droit de priorité",
    description:
      "Lorsque le propriétaire accepte, vous obtenez un véritable droit de préférence : s’il décide de vendre, il doit vous prévenir en premier.",
    image: image3,
  },
  {
    title: "Sécurisez votre avenir",
    description:
      "Avec <em>preference</em>, vous ne passez plus à côté du bien parfait. Vous êtes notifié en priorité, avec le temps de vous positionner.",
    image: image,
  },
];

const featureList: string[] = [
  "Droit de préférence",
  "Alertes prioritaires",
  "Sélection libre de biens",
  "Accord vendeur signé",
  "Zéro commission d’agence",
  "Respect du cadre légal",
  "Approche confidentielle",
];



export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Les{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          avantages{" "}
        </span>
         de <em>preference</em>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[400px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
