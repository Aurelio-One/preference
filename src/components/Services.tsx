import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/services.jpg";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Recherche de propriétaires",
    description:
      "Nous approchons directement des propriétaires dans les zones ciblées, même s’ils ne sont pas vendeurs, pour leur proposer une ouverture encadrée à la vente.",
    icon: <ChartIcon />,
  },
  {
    title: "Encadrement contractuel",
    description:
      "Nous structurons un contrat de droit de préférence clair, légal et équilibré. L’acheteur est prioritaire, le vendeur est indemnisé, sans se lier à une vente immédiate.",
    icon: <WalletIcon />,
  },
  {
    title: "Intermédiation sécurisée",
    description:
      "Nous faisons le lien jusqu’à la fin du droit de préférence : suivi, levée d’option, mise en relation avec notaire si besoin. Vous êtes accompagné(e) à chaque étape.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Services{" "}
            </span>
            <em>preference</em>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Une offre clé-en-main pour débloquer des biens inaccessibles et sécuriser votre avance.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[400px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
