import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Le droit de préférence m’oblige-t-il à acheter ?",
    answer:
      "Non. Vous avez le droit d’acheter en priorité si le bien est mis en vente, mais aucune obligation. Vous êtes libre d’accepter ou non les conditions proposées par le vendeur.",
    value: "item-1",
  },
  {
    question: "Le propriétaire est-il obligé de vendre ?",
    answer:
      "Non. Il s’engage uniquement à vous proposer le bien en priorité si et seulement s’il décide de vendre pendant la durée du contrat.",
    value: "item-2",
  },
  {
    question: "Que se passe-t-il si le vendeur ne respecte pas la priorité ?",
    answer:
      "Le contrat signé lui est opposable juridiquement. En cas de non-respect, il s’expose à devoir vous verser une indemnité prévue dans le contrat.",
    value: "item-3",
  },
  {
    question: "La prime versée au propriétaire est-elle remboursée si rien ne se passe ?",
    answer:
      "Non. La prime est versée pour obtenir une priorité, pas une promesse de vente. C’est un pari assumé, comme une option payée.",
    value: "item-4",
  },
  {
    question: "Combien coûte un droit de préférence ?",
    answer:
      "Cela dépend de la durée (1 à 5 ans) et du type de bien. En général, les montants vont de 1 000 € à 3 000 € pour un bien estimé entre 200K et 500K €.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Foire aux{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Une autre question ?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contactez-nous
        </a>
      </h3>
    </section>
  );
};
