import { useState, type FormEvent } from 'react';
import { Check, Loader2, ArrowRight } from 'lucide-react';

const productOptions = [
  'Dried Ginger',
  'Cocoa',
  'Coffee',
  'Shea Butter',
  'Charcoal',
  'Gold & Precious Metals',
  'Other',
];

const incotermOptions = [
  'FCA',
  'FOB',
  'CFR',
  'CIF',
  'CPT',
  'CIP',
  'DAP',
  'Other / Not sure',
];

const inputClass =
  'w-full border-b border-ink-200 bg-transparent py-3 text-base text-ink-900 placeholder-ink-300 transition-colors duration-200 focus:border-ink-900 focus:outline-none';
const labelClass =
  'mb-1 block text-xs font-medium uppercase tracking-[0.1em] text-ink-400';

export default function QuoteForm({ defaultProduct }: { defaultProduct?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="border border-ink-100 bg-white p-8 md:p-12">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center bg-ink-900">
            <Check size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-medium text-ink-900">Inquiry Received</h3>
            <p className="text-sm text-ink-400">Thank you for your submission</p>
          </div>
        </div>
        <p className="mt-6 text-base leading-relaxed text-ink-600">
          Thank you. Your trade inquiry has been received. Our team will review the
          requirements and respond with the next steps.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-medium uppercase tracking-[0.12em] text-ink-900 transition-colors hover:text-brand-red"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className={inputClass}
            placeholder="Company name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="country">
            Country
          </label>
          <input
            id="country"
            name="country"
            className={inputClass}
            placeholder="Your country"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Business Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            className={inputClass}
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="product">
            Product *
          </label>
          <select
            id="product"
            name="product"
            required
            defaultValue={defaultProduct || ''}
            className={inputClass}
          >
            <option value="" disabled>
              Select a product
            </option>
            {productOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="quantity">
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            className={inputClass}
            placeholder="e.g. 5 MT"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="destination">
            Destination
          </label>
          <input
            id="destination"
            name="destination"
            className={inputClass}
            placeholder="Destination port / country"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="deliveryDate">
            Preferred Delivery Date
          </label>
          <input
            id="deliveryDate"
            name="deliveryDate"
            type="date"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="incoterm">
            Preferred Incoterm
          </label>
          <select
            id="incoterm"
            name="incoterm"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select Incoterm
            </option>
            {incotermOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="additionalSpecs">
          Additional Specifications
        </label>
        <input
          id="additionalSpecs"
          name="additionalSpecs"
          className={inputClass}
          placeholder="Quality, grade, packaging, or other specifications"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your sourcing requirements"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex w-full items-center justify-center gap-2 bg-ink-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-brand-red disabled:opacity-60 md:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Request a Quotation
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>
    </form>
  );
}
