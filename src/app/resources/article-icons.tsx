const ICONS: Record<string, React.ReactNode> = {
  chart: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8B547" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 16v-3" /><path d="M12 16v-7" /><path d="M17 16v-5" /></svg>
  ),
  bolt: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8B547" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  ),
  megaphone: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8B547" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>
  ),
  link: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8B547" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
  ),
  clipboard: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8B547" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
  ),
  key: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8B547" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
  ),
};

export function ArticleIcon({ name }: { name: string }) {
  return ICONS[name] ?? null;
}
