import { Metadata } from "next";

import MeSection from "@/modules/me";

import { METADATA } from '@/common/constant/metadata';

export const metadata: Metadata = {
  title: `Hi! ${METADATA.exTitle}`,
  description: 'Programming tips for software developer',
  keywords: 'frontend developer, software engineer, react js, javascript, typescript',
  alternates: {
    canonical: `${process.env.DOMAIN}/me`
  }
};

function MePage() {
  return (
    <>
      <MeSection />
    </>
  );
}

export default MePage;
