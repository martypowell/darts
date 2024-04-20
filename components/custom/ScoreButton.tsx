import { Button } from "../ui/button";

export const ScoreButton = ({
  value,
  label,
  onClick,
}: {
  value: number | string;
  label: string;
  onClick: (score: 1 | 2 | 3) => void;
}) => {
  const handleClick = (score: 1 | 2 | 3) => {
    onClick(score);
  };

  return (
    <div className="border border-gray-300 relative h-28 w-48">
      <Button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleClick(1);
        }}
        className="absolute bg-white text-4xl text-black hover:bg-gray-100 z-10 w-full h-full"
      >
        <span className="absolute top-1 pt-1">{label}</span>
      </Button>
      <div className="absolute bottom-1 l-0 r-0 w-full z-20">
        <span
          className={`flex ${
            label === "Bull" ? "justify-center" : "justify-around"
          }`}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleClick(2);
            }}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Double
          </Button>
          {label !== "Bull" && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleClick(3);
              }}
              //  keep the default green for the triple button, but make the hover color slightly darker
              className="bg-green-500 text-white hover:bg-green-600"
            >
              Triple
            </Button>
          )}
        </span>
      </div>
    </div>
  );
};
