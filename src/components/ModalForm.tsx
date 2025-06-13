import { useState } from "react";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalForm = ({ isOpen, onClose }: Props) => {
  const [submitted, setSubmitted] = useState(false);

  // Reset l'état à chaque ouverture de la modale
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
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
              Trouvons votre préférence idéale
            </h2>

 <form
  name="preference"
  method="POST"
  data-netlify="true"
  className="space-y-6"
    action="/"

  onSubmit={() => setSubmitted(true)}>




  <input type="hidden" name="form-name" value="preference" />


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
    placeholder="Ville ou quartier recherché"
    required
  />

  <Select name="type_bien" required>
    <option value="">Type de bien recherché</option>
    <option value="appartement">Appartement</option>
    <option value="maison">Maison</option>
    <option value="investissement">Investissement locatif</option>
    <option value="autre">Autre</option>
  </Select>

  <Input
    type="text"
    name="budget"
    placeholder="Budget maximal (€)"
    required
  />

  <Select name="delai" required>
    <option value="">Dans quel délai souhaitez-vous acheter ?</option>
    <option value="urgent">Très rapidement (moins d'1 mois)</option>
    <option value="court">1 à 3 mois</option>
    <option value="moyen">3 à 6 mois</option>
    <option value="long">+ de 6 mois</option>
  </Select>

  <Textarea
    name="message"
    placeholder="Décrivez ce que vous cherchez : type de bien, critères essentiels, ambiance du quartier, etc."
    rows={5}
    required
  />

  <Button
    type="submit"
    className="w-full bg-[#c58b75] hover:bg-[#b37764] text-white font-medium py-3 rounded-md transition"
  >
    Envoyer ma demande
  </Button>

  {submitted && (
    <p className="text-center text-green-700 mt-2">
      Merci pour votre demande. Nous reviendrons vers vous très rapidement.
    </p>
  )}
</form>

          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Merci pour votre message 👌
            </h3>
            <p className="text-gray-600">
              Nous vous recontactons rapidement avec des opportunités correspondant à votre préférence.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalForm;
