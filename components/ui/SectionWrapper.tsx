interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'alt' | 'muted' | 'dark';
}

const bgClasses = {
  white: 'bg-surface',
  alt: 'bg-surface-alt',
  muted: 'bg-surface-muted',
  dark: 'bg-navy-900 text-white',
};

export default function SectionWrapper({
  children,
  className = '',
  id,
  background = 'white',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
