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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        {content ?? <div className="text-2xl font-bold">{total}</div>}
      </CardContent>
    </Card>
  );
}
