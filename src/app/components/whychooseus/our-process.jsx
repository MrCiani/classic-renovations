import { ClipboardCheck, ShieldCheck, Paintbrush } from 'lucide-react';

const STEPS = [
  {
    icon: ClipboardCheck,
    title: 'Site Walk & Estimate',
    desc: 'In-person scope review and a detailed painting proposal within 48 hours for homes, condos, and commercial properties.',
  },
  {
    icon: ShieldCheck,
    title: 'Prep & Protection',
    desc: 'Floors, furniture, and fixtures covered; surfaces repaired and primed for crisp lines and durable finishes.',
  },
  {
    icon: Paintbrush,
    title: 'Professional Painting',
    desc: 'Spec-accurate interior and exterior painting with daily updates—on schedule across the GTA.',
  },
];

export default function ProcessSection() {
  // JSON-LD structured data: HowTo
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Our Painting Process',
    description:
      'How Classic Contracting delivers spec-accurate interior and exterior painting across the GTA in three clear steps.',
    step: STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  };

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="py-14 sm:py-16 bg-[var(--bg-100)]"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2
            id="process-title"
            className="text-3xl sm:text-4xl font-extrabold text-[var(--text-100)]"
          >
            Our Process
          </h2>
          <p className="mt-2 text-[var(--text-200)] max-w-3xl mx-auto text-sm sm:text-base">
            A streamlined, three-step painting process for homes, condos, and commercial spaces in
            the GTA—clear estimates, careful prep, and spec-accurate finishes delivered on time.
          </p>
        </div>

        {/* Steps (ordered list for semantics) */}
        <ol className="grid gap-8 sm:gap-10 sm:grid-cols-3" role="list">
          {STEPS.map(({ icon: Icon, title, desc }, idx) => (
            <li
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[var(--primary-100)] text-white shadow-sm hover:shadow-md transition"
            >
              <span
                aria-hidden="true"
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white"
              >
                <Icon className="h-7 w-7 text-[var(--primary-100)]" />
              </span>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm sm:text-base/6 opacity-90">{desc}</p>
            </li>
          ))}
        </ol>

        {/* JSON-LD for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      </div>
    </section>
  );
}
