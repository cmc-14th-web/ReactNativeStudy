"use client";
import { RecoilRoot } from "recoil";

import MapContainer from "@/components/MapContainer";

export default function Home() {
  return (
    <RecoilRoot>
      <MapContainer />
    </RecoilRoot>
  );
}
