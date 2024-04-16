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
    // tailwind button that is with a white background and a border of gray 300
    // large button text that is the label
    <Button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        handleClick(1);
      }}
      className="border border-gray-300 bg-white text-4xl text-black flex-col items-center justify-between relative hover:bg-gray-100 h-28 w-48"
    >
      <span className="pt-1">{label}</span>
      <span
        className={`flex ${
          label === "Bull" ? "justify-center" : "justify-between"
        } z-10 w-40`}
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
    </Button>
  );
};
