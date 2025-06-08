import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";


export function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Ma préférence à moi
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Réservez un droit de priorité sur un bien, avant même qu’il soit mis en vente.  
            Un raccourci inédit pour les acheteurs frustrés, et une prime immédiate pour les propriétaires patients.
          </p>
        </div>
      </div>
    </section>
  );
}
