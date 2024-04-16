import { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Component({
  content,
  Icon,
  title,
  total,
}: {
  title: string;
  total: number | string;
  Icon?: LucideIcon;
  content?: React.ReactNode;
}) {
  return (
    <Card className="p-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-1">
        <CardTitle className="text-sm font-medium p-1">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent className="px-2 py-0">
        {content ?? <div className="text-2xl font-bold">{total}</div>}
      </CardContent>
    </Card>
  );
}
