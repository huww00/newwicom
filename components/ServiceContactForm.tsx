import React, { useState, ChangeEvent, FormEvent } from "react";

export type RequestType = "Réclamation" | "Demande de devis" | "Autres demande";

type FormState = {
  type: RequestType | "";
  company: string;
  siren: string;
  fullName: string;
  phone: string;
  email: string;
  comments: string;
  otherRequest?: string;
  file?: File | null;
};

const initialState: FormState = {
  type: "",
  company: "",
  siren: "",
  fullName: "",
  phone: "",
  email: "",
  comments: "",
  otherRequest: "",
  file: null,
};

export default function ServiceContactForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    setData((d) => ({ ...d, file }));
  };

  const validate = () => {
    if (!data.type) return "Veuillez sélectionner le type de demande.";
    if (!data.company.trim()) return "Veuillez renseigner la raison sociale.";
    if (data.siren && !/^\d{9}$/.test(data.siren)) return "Le SIREN doit contenir 9 chiffres.";
    if (!data.fullName.trim()) return "Veuillez indiquer votre nom et prénom.";
    if (!data.phone.trim()) return "Veuillez indiquer votre numéro de téléphone.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return "Veuillez saisir une adresse mail valide.";
    if (data.type === "Autres demande" && !data.otherRequest?.trim()) return "Veuillez préciser votre demande.";
    return null;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    try {
      setSubmitting(true);
      // Aucune intégration backend n'est configurée pour le moment.
      // Affiche simplement une confirmation locale.
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      setData(initialState);
    } catch (err) {
      setError("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full rounded-xl border border-green-200 bg-green-50 p-6">
        <p className="text-green-800 font-FoundersGrotesk text-lg">
          Merci, votre demande a été envoyée.
        </p>
        <button
          type="button"
          className="mt-4 inline-flex items-center rounded-lg bg-secondry px-4 py-2 text-white hover:opacity-90"
          onClick={() => setSubmitted(false)}
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
      <fieldset>
        <legend className="text-base font-semibold font-FoundersGrotesk">Objet de la demande</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {(["Réclamation", "Demande de devis", "Autres demande"] as RequestType[]).map((t) => (
            <label key={t} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3 cursor-pointer hover:border-gray-300">
              <input
                type="radio"
                name="type"
                value={t}
                checked={data.type === t}
                onChange={onChange}
                className="accent-secondry"
                required
              />
              <span className="text-sm font-NeueMontreal">{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {data.type === "Autres demande" ? (
        <div className="mt-6">
          <label htmlFor="otherRequest" className="block text-sm text-gray-700">Précisez votre demande</label>
          <textarea
            id="otherRequest"
            name="otherRequest"
            rows={3}
            required
            value={data.otherRequest}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      ) : null}

      <div className="mt-6 border-t border-gray-200 pt-6">
        <h3 className="text-base font-semibold font-FoundersGrotesk">Les informations houma</h3>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm text-gray-700">Raison sociale</label>
            <input
              id="company"
              name="company"
              type="text"
              value={data.company}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 outline-none focus:ring-2 focus:ring-marquee/40"
            />
          </div>

          <div>
            <label htmlFor="siren" className="block text-sm text-gray-700">SIREN</label>
            <input
              id="siren"
              name="siren"
              type="text"
              inputMode="numeric"
              pattern="\\d{9}"
              placeholder="9 chiffres"
              value={data.siren}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 outline-none focus:ring-2 focus:ring-marquee/40"
            />
          </div>

          <div>
            <label htmlFor="fullName" className="block text-sm text-gray-700">Nom prénom</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={data.fullName}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 outline-none focus:ring-2 focus:ring-marquee/40"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm text-gray-700">Numéro de téléphone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 outline-none focus:ring-2 focus:ring-marquee/40"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-700">Adresse mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 outline-none focus:ring-2 focus:ring-marquee/40"
            />
          </div>

          <div>
            <label htmlFor="file" className="block text-sm text-gray-700">Pièce jointe</label>
            <input
              id="file"
              name="file"
              type="file"
              onChange={onFileChange}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 file:mr-4 file:rounded-md file:border-0 file:bg-secondry file:px-3 file:py-2 file:text-white file:hover:opacity-90"
            />
            {data.file ? (
              <p className="mt-1 text-xs text-gray-600">Fichier sélectionné : {data.file.name}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="comments" className="block text-sm text-gray-700">W commentaires</label>
            <textarea
              id="comments"
              name="comments"
              rows={4}
              value={data.comments}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 outline-none focus:ring-2 focus:ring-marquee/40"
            />
          </div>
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>
      ) : null}

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="reset"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50"
          onClick={() => setData(initialState)}
        >
          Effacer
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center rounded-lg bg-secondry px-4 py-2 text-white hover:opacity-90 disabled:opacity-60"
        >
          {submitting ? "Envoi…" : "Envoyer"}
        </button>
      </div>
    </form>
  );
}
