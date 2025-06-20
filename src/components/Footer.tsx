import { useState } from "react";
import navicon from "../assets/navlogo.png";
import LandlordModal from "../components/LandlordModal";

export const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img
              src={navicon}
              alt="preference-logo"
              className="max-w-[180px]"
            />
          </a>
          <p className="text-muted-foreground mt-4 text-sm">
            Le droit de réserver un bien, avant même qu’il ne soit à vendre.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Acheteurs</h3>
          <a href="#" className="text-muted-foreground">Comment ça marche</a>
          <a href="#" className="text-muted-foreground">Rechercher une préférence</a>
          <a href="#" className="text-muted-foreground">Tarifs</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Propriétaires</h3>
          <a
            href="#"
            className="text-muted-foreground"
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
          >
            Proposer un bien
          </a>
          <a href="#" className="text-muted-foreground">Prime de mise en attente</a>
          <a href="#" className="text-muted-foreground">Exemples</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Ressources</h3>
          <a href="#faq" className="text-muted-foreground">FAQ</a>
          <a href="/legal/notice.html" className="text-muted-foreground">Mentions légales</a>
          <a href="/legal/terms.html" className="text-muted-foreground">CGU</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <a href="https://www.preference.immo" className="text-muted-foreground">
            preference.immo
          </a>
          <a href="mailto:contact@preference.immo" className="text-muted-foreground">
            contact@
          </a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3 className="text-muted-foreground text-sm">
          &copy; 2025 <em>preference</em> – Tous droits réservés.
        </h3>
      </section>

      {/* Landlord modal rendu conditionnellement */}
      <LandlordModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
};
