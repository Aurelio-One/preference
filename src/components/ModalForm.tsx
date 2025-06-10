import { useState } from "react";
import { useEffect } from "react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl p-8 relative animate-fadeIn">
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
              className="space-y-4"
              onSubmit={() => setSubmitted(true)}
              
            >
              <input type="hidden" name="form-name" value="preference" />

              <input
                type="email"
                name="email"
                placeholder="Votre e-mail"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                name="ville"
                placeholder="Ville ou quartier préféré"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                name="message"
                placeholder="Décrivez ce que vous cherchez"
                rows={4}
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md text-lg font-medium hover:bg-gray-900 transition"
              >
                Envoyer ma demande
              </button>
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
