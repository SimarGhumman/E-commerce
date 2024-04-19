/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutusOverridesProps = {
    Aboutus?: PrimitiveOverrideProps<ViewProps>;
    "CS218 Project Team Members: Brian Tran, Han Qiu, Simar Ghumman"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
    "Browse our shop"?: PrimitiveOverrideProps<TextProps>;
    "We believe in produce. Tasty produce. Produce like: Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes\u2014Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. What are we forgetting? Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, \u201Crocket\u201D). Persian cucumbers, in addition to aforementioned \u201Cnormal\u201D cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we\u2019re vendors of organic produce, but if you asked us to describe what escaroles are..."?: PrimitiveOverrideProps<TextProps>;
    "WHAT WE BELIEVE"?: PrimitiveOverrideProps<TextProps>;
    "jonathan-kemper-1HHrdIoLFpU-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    "Central California \u2014 The person who grew these was located in Central California and, er, hopefully very well-compensated."?: PrimitiveOverrideProps<TextProps>;
    "Stocksy_txp226f62b2aNe300_Medium_4582193 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type AboutusProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AboutusOverridesProps | undefined | null;
}>;
export default function Aboutus(props: AboutusProps): React.ReactElement;
