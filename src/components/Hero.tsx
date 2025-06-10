import herologo from "../assets/hero-logo.png";


export function Hero() {
  return (
    <section className="hero-bg text-white w-full py-36 md:py-42 lg:py-52">
        <div className="hero-bg__image" />
  <div className="hero-bg__content">

      <div className="relative container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center space-y-6">
{/*           <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            PRÉFÉRENCE
          </h1> */}
                                  <img
                          src={herologo}
                          alt="preference-hero-logo"
                                                className="max-w-[500px]"

                        />
          <p className="max-w-[700px] text-broken-white md:text-xl">
            Réservez un droit de priorité sur un bien, avant même qu’il soit mis en vente.  
            Un raccourci inédit pour les acheteurs frustrés, et une prime immédiate pour les propriétaires patients.
          </p>
        </div>
      </div>
        </div>
    </section>
  );
}
