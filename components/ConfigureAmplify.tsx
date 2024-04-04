// components/ConfigureAmplify.tsx
"use client";

import config from "@/amplifyconfiguration.json";
// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}