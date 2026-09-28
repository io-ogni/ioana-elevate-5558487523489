// Non-clickable, obfuscated contact address. There's no mailto link and no clean
// "user@domain" string in the rendered markup, so address-harvesting bots can't
// grab it directly. Humans read "[at]"/"[dot]" fine (a common anti-spam convention,
// also accepted for the German Impressum requirement).
export const Email = ({ className }: { className?: string }) => (
  <span className={className}>admin [at] ioana-ognibeni [dot] eu</span>
);
