export const cricketScores = ["20", "19", "18", "17", "16", "15", "Bull"] as const;

export type CricketScore = (typeof cricketScores)[number];

export type PossibleScores = Record<
  CricketScore,
  {
    label: string;
    value: number;
  }
>;