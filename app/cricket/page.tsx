"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useHistoryState } from "@uidotdev/usehooks";
import InfoPanel from "@/components/custom/InfoPanel";
import { BoardMarker } from "@/components/custom/BoardMarker";
import { ScoresSheet } from "@/components/custom/ScoresSheet";
import { CricketScore } from "@/common/scores";
import { ScoreRow } from "@/components/custom/ScoreRow";

const possibleScores = [
  {
    label: "20",
    value: 20,
  },
  {
    label: "19",
    value: 19,
  },
  {
    label: "18",
    value: 18,
  },
  {
    label: "17",
    value: 17,
  },
  {
    label: "16",
    value: 16,
  },
  {
    label: "15",
    value: 15,
  },
  {
    label: "Bull",
    value: 25,
  },
] as { label: CricketScore; value: number }[];

const getScoreLabel = (score: CricketScore, value: number) => {
  if (score === "Bull") {
    if (value === 1) {
      return "SBull";
    }
    return "DBull";
  } else if (value === 1) {
    return `S${score}`;
  } else if (value === 2) {
    return `D${score}`;
  } else if (value === 3) {
    return `T${score}`;
  }

  return score;
};

const CricketPage: React.FC = () => {
  //const { state, set, undo, redo, clear, canUndo, canRedo }
  const {
    state: score,
    set: setScore,
    undo: undoScore,
    clear: clearScore,
  } = useHistoryState<Record<CricketScore, number>>({
    20: 0,
    19: 0,
    18: 0,
    17: 0,
    16: 0,
    15: 0,
    Bull: 0,
  });
  const {
    state: info,
    set: setInfo,
    undo: undoInfo,
    clear: clearInfo,
  } = useHistoryState<{
    dartCount: number;
    misses: number;
    scores: {
      points: number;
      label: string;
      marks: number;
    }[];
  }>({
    dartCount: 0,
    misses: 0,
    scores: [],
  });
  const roundNumber = Math.floor(info.dartCount / 3) + 1;
  const totalMarksScored = info.scores
    .filter(({ marks }) => marks > 0)
    .reduce((acc, val) => {
      return acc + val.marks;
    }, 0);
  // marks per round is taking the total marks scored divided by the actual darts thrown, then multiplying it by 3
  const marksPerRound =
    info.dartCount > 0 ? (totalMarksScored / info.dartCount) * 3 : 0;

  const handleScore = (target: CricketScore, dartScore: 1 | 2 | 3): void => {
    const newState = {
      ...score,
      [target]: score[target] + dartScore,
    };
    setScore(newState);

    // if newstate has all values of 3, then you have won, alert the user
    if (Object.values(newState).every((value) => value >= 3)) {
      alert("You have won!");
    }

    const dartCount = info.dartCount + 1;

    // want to track each darts score
    const dartPoints =
      target === "Bull" ? 25 * dartScore : parseInt(target) * dartScore;

    setInfo({
      ...info,
      dartCount,
      scores: [
        ...info.scores,
        {
          points: dartPoints,
          label: getScoreLabel(target, dartScore),
          marks: dartScore,
        },
      ],
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-4 px-8">
      <div className="darts">
        <div className="grid grid-cols-7 gap-4">
          <InfoPanel title="Round" total={roundNumber} />
          <InfoPanel title="Darts Thrown" total={info.dartCount} />
          <InfoPanel title="Misses" total={info.misses} />
          <InfoPanel title="Marks Per Round" total={marksPerRound.toFixed(2)} />
          <Button
            type="button"
            onClick={() => {
              setInfo({
                dartCount: info.dartCount + 1,
                misses: info.misses + 1,
                scores: [
                  ...info.scores,
                  {
                    points: 0,
                    label: "Miss",
                    marks: 0,
                  },
                ],
              });
            }}
          >
            Miss
          </Button>
          <Button
            type="button"
            onClick={() => {
              undoScore();
              undoInfo();
            }}
          >
            Undo
          </Button>
          <Button
            type="button"
            onClick={() => {
              clearScore();
              clearInfo();
            }}
          >
            Start Over
          </Button>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-4">
          {/* <h1 className="text-3xl mb-4">Round: {roundNumber}</h1> */}
          {/* <ScoresSheet scores={info.scores.map((score) => score.label)} /> */}
        </div>
      </div>
      <Separator className="my-4" />
      <div>
        {possibleScores.map((possibleScore, index) => (
          <div key={possibleScore.label}>
            <ScoreRow
              key={index}
              target={possibleScore.label}
              isClosed={score[possibleScore.label] >= 3}
              onScore={handleScore}
              score={score[possibleScore.label]}
            />
            <div className="mb-2"></div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CricketPage;
