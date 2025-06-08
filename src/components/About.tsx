import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  À propos{" "}
                </span>
                de PRÉFÉRENCE
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                PRÉFÉRENCE est une alternative inédite à la chasse immobilière classique.  
                Nous créons un pont entre les acheteurs frustrés et les propriétaires non vendeurs, 
                en structurant des droits de préférence légaux, simples et humains.
                Notre mission : débloquer des biens invisibles sur le marché, dans un cadre gagnant-gagnant.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
