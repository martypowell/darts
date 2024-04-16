import { CircleX, Slash, X } from "lucide-react";

export const BoardMarker = ({
  numberOfMarks,
  onClick,
}: {
  numberOfMarks: number;
  onClick?: () => void;
}) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {numberOfMarks === 0 ? (
        <></>
      ) : numberOfMarks === 1 ? (
        <Slash
          className="h-4 w-4 text-muted-foreground"
          aria-label={`Mark ${numberOfMarks} on the board`}
        />
      ) : numberOfMarks === 2 ? (
        <X
          className="h-4 w-4 text-muted-foreground"
          aria-label={`Mark ${numberOfMarks} on the board`}
        />
      ) : (
        <CircleX
          className="h-4 w-4 text-muted-foreground"
          aria-label={`Mark ${numberOfMarks} on the board`}
        />
      )}
    </div>
  );
};
