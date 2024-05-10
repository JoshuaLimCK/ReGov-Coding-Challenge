import Link from "next/link";
import { Button } from "./ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
