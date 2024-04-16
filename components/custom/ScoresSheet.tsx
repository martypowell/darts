// Component to display each rounds scores, showing the most recent round at the top.
// use shadcn ui sheet

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const toRoundScores = (scores: string[]) => {
  // convert scores to an array of arrays containing a maximum of 3 items
  const roundScores = [];
  let round = [];
  for (let i = 0; i < scores.length; i++) {
    round.push(scores[i]);
    if (round.length === 3 || i === scores.length - 1) {
      roundScores.push(round);
      round = [];
    }
  }
  return roundScores;
};

export const ScoresSheet = ({ scores }: { scores: string[] }) => {
  const roundScores = toRoundScores(scores).reverse();
  return (
    <Sheet>
      <SheetTrigger>
        <Button className="btn">Scores</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Scores</SheetTitle>
          <SheetDescription>Most recent round at the top</SheetDescription>
        </SheetHeader>
        <div>
          <Table>
            {/* <TableCaption>Round Scores</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Round</TableHead>
                <TableHead>Dart 1</TableHead>
                <TableHead>Dart 2</TableHead>
                <TableHead>Dart 3</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roundScores.map((scores, index) => (
                <TableRow key={index}>
                  <TableCell>{roundScores.length - index}</TableCell>
                  {scores.map((score, index) => (
                    <TableCell key={index}>{score}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SheetContent>
    </Sheet>
  );
};
