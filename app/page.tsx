import { TypographyH1 } from "@/components/custom/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TypographyH1>Darts</TypographyH1>
      <Separator className="my-4" />
      <Button className="btn">Cricket</Button>
    </div>
  );
}
