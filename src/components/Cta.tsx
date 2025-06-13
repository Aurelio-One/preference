import { Button } from "./ui/button";
import ModalForm from "../components/ModalForm";
import LandlordModal from "../components/LandlordModal";

import { useState } from "react";

export const Cta = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLandlordModalOpen, setLandlordModalOpen] = useState(false);

  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Réservez votre
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              droit de préférence{" "}
            </span>
            avant tout le monde
          </h2>
          <p className="text-xl mt-4 mb-8 lg:mb-0">
            En tant qu’acheteur, soyez le premier à être averti — et à pouvoir
            acheter — un bien promis, même s’il n’est pas encore en vente
            aujourd’hui.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2 flex gap-4">
          <Button
            className="w-full md:mr-4 md:w-auto"
            onClick={() => setModalOpen(true)}
          >
            Trouver ma préférence
          </Button>
        <Button
            variant="secondary"
            className="w-full md:mr-4 md:w-auto !mt-0"
            onClick={() => setLandlordModalOpen(true)}
          >
            Proposer un bien
          </Button>
  

          {/* Modals */}
          <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          <LandlordModal
            isOpen={isLandlordModalOpen}
            onClose={() => setLandlordModalOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};
