
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    // Note: User needs to replace 'YOUR_ACCESS_KEY_HERE' with their actual Web3Forms access key
    formData.append('access_key', '0b136a07-f870-4174-9166-bbadc928d2f0');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass p-8 border border-zinc-800 rounded-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full bg-zinc-900/50 border border-zinc-800 p-3 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full bg-zinc-900/50 border border-zinc-800 p-3 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell me about your project..."
            className="w-full bg-zinc-900/50 border border-zinc-800 p-3 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-zinc-100 text-zinc-950 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-zinc-300 disabled:bg-zinc-800 disabled:text-zinc-500 transition-all active:scale-[0.98]"
        >
          {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-emerald-500 text-[10px] font-mono uppercase tracking-widest text-center">
            Message received. I will be in touch shortly.
          </p>
        )}

        {submitStatus === 'error' && (
          <p className="text-red-500 text-[10px] font-mono uppercase tracking-widest text-center">
            Transmission failed. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
