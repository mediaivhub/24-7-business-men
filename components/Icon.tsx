import { ICONS } from "@/lib/icons";

export default function Icon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICONS[name] ?? ICONS.file }}
    />
  );
}
