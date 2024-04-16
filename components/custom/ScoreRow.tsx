import { Button } from "../ui/button";
import { CricketScore } from "@/common/scores";
import { ScoreButton } from "./ScoreButton";
import { SingleScoreIcon, DoubleScoreIcon, ClosedIcon } from "@/static/icons";

export const ScoreRow = ({
  onScore,
  isClosed,
  target,
  score,
}: {
  score: number;
  target: CricketScore;
  isClosed: boolean;
  onScore: (target: CricketScore, score: 1 | 2 | 3) => void;
}) => {
  const handleScore = (score: 1 | 2 | 3) => {
    onScore(target, score);
  };

  return (
    <div className="score-row grid grid-cols-5 gap-4 place-items-center">
      <div className="points">
        <p className="text-5xl">
          {score > 3 && parseInt(target) * (score - 3)}
        </p>
      </div>
      <div className="score-to-close">
        {score >= 3 ? (
          <ClosedIcon />
        ) : score === 2 ? (
          <DoubleScoreIcon />
        ) : score === 1 ? (
          <SingleScoreIcon />
        ) : (
          <></>
        )}
      </div>
      <ScoreButton value={target} label={target} onClick={handleScore} />
      <div className="score-to-close"></div>
      <div className="points"></div>
    </div>
  );
};
