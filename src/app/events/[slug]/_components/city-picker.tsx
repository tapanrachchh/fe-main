"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CityPickerDialog } from "@/components/common/city-picker-dialog";
import { useScreenWidth } from "@/hooks/use-screen-width";
import { usePreferences } from "@/provider/preferences-provider";

export function CityPicker({ willDialogOpen }: { willDialogOpen: boolean }) {
  const { preferences, setPreferences } = usePreferences();
  const screenWidth = useScreenWidth();
  const router = useRouter();
  const { slug } = useParams();

  const [isCityPickerOpen, setIsCityPickerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (screenWidth >= 768) {
      setIsCityPickerOpen(willDialogOpen);
    } else if (screenWidth > 0 && screenWidth < 768 && willDialogOpen) {
      router.push(`/request-movie/select-city?path=/events/${slug}`);
    }
  }, [willDialogOpen, screenWidth, router, slug]);

  return (
    <CityPickerDialog
      open={isCityPickerOpen}
      onOpenChange={setIsCityPickerOpen}
      onSelectCity={(city) => setPreferences({ ...preferences, city })}
    />
  );
}