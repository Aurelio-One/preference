import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LandlordModal = ({ isOpen, onClose }: Props) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 !mt-0">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl p-8 relative animate-fadeIn bg-broken-white">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-light"
          aria-label="Fermer"
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Proposez votre bien
            </h2>

            <form
              name="landlord"
              method="POST"
              data-netlify="true"
              action="/"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                fetch("/", {
                  method: "POST",
                  body: formData,
                })
                  .then(() => setSubmitted(true))
                  .catch((err) => console.error("Netlify form error:", err));
              }}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="landlord" />

              <Input
                type="email"
                name="email"
                placeholder="Votre e-mail"
                required
              />

              <Input
                type="tel"
                name="telephone"
                placeholder="Votre numéro de téléphone (optionnel)"
              />

              <Input
                type="text"
                name="ville"
                placeholder="Ville ou quartier du bien"
                required
              />

              <Select name="type_bien" required>
                <option value="">Type de bien</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="immeuble">Immeuble</option>
                <option value="autre">Autre</option>
              </Select>

              <Input
                type="number"
                name="surface"
                placeholder="Surface (en m²)"
              />

              <Textarea
                name="message"
                placeholder="Dites-nous en plus : état, locataire en place, projet de vente, etc."
                rows={4}
              />

              <Button
                type="submit"
                className="w-full bg-[#c58b75] hover:bg-[#b37764] text-white font-medium py-3 rounded-md transition"
              >
                Proposer mon bien
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Merci pour votre message 👌
            </h3>
            <p className="text-gray-600">
              Nous vous recontactons rapidement pour en savoir plus sur votre bien.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandlordModal;
