import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

type RecolSettingProps = {
  children: ReactNode;
};

export default function RecolSetting({ children }: RecolSettingProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
