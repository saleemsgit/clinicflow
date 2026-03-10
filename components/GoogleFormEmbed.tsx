'use client';

export default function GoogleFormEmbed() {
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfdEkZse3bUFuamJ7F7obCHUENohtBTcFuDbfNUj9DpcQr5SA/viewform?embedded=true';

  return (
    <div className="w-full rounded-xl overflow-hidden border border-border bg-white shadow-sm">
      <iframe
        src={formUrl}
        width="100%"
        height="900"
        className="w-full border-0"
        title="Book a Demo — ClinicFlow LK"
        loading="lazy"
      >
        Loading form…
      </iframe>
    </div>
  );
}
