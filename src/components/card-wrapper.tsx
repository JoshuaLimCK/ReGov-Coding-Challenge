"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import Social from "@/components/social";
import { BackButton } from "@/components/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  subheaderLabel?: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  subheaderLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  const showFooter = backButtonLabel && backButtonHref;
  return (
    <Card className="sm:w-[30rem]">
      <CardHeader>
        <Header title={headerLabel} subtitle={subheaderLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      {showFooter && (
        <CardFooter className="flex justify-center">
          <BackButton href={backButtonHref} label={backButtonLabel} />
        </CardFooter>
      )}
    </Card>
  );
};
