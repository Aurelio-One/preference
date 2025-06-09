import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Julie M.",
    userName: "Acheteuse à Nantes",
    comment:
      "Grâce à PRÉFÉRENCE, j’ai pu sécuriser un droit sur un bien que je n’aurais jamais vu en ligne. Une vraie alternative à la chasse classique.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Hugo L.",
    userName: "Propriétaire à Lyon",
    comment:
      "Je n’étais pas encore prêt à vendre, mais recevoir une prime sans rien signer m’a convaincu. Le système est bien pensé et respectueux.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Nadia R.",
    userName: "Chasseuse immobilière",
    comment:
      "J’ai proposé PRÉFÉRENCE à deux de mes clients. Ils ont payé un droit d’accès prioritaire et attendent tranquillement leur tour. Top !",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Pierre C.",
    userName: "Acheteur à Bordeaux",
    comment:
      "J’en avais marre des biens qui partent en 24h. Là, j’ai mon droit, je sais que je serai le premier appelé si le vendeur bouge.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Samira D.",
    userName: "Propriétaire à Toulouse",
    comment:
      "Je ne savais même pas que ça existait. J’ai touché 2 000 € sans vendre. Et si un jour je me décide, j’ai déjà un acheteur.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Thomas E.",
    userName: "Agent indépendant",
    comment:
      "C’est parfait pour mes leads dormants. Je récupère une prime pour eux et peut leur rouvrir une perspective dans 6 mois ou plus.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Ils ont testé
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          PRÉFÉRENCE
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Acheteurs, propriétaires ou professionnels, ils racontent pourquoi ils ont choisi ce modèle.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
         {/*        <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
 */}
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
