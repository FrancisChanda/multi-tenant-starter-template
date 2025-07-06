import { Avatars } from "./member_avatars";
import { MemberHoldings } from "./member_holdings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MembersPage() {
  return (
    <div className="flex-1 flex-col space-y-4 p-8 pt-6">
      <h1 className="text-2xl font-bold tracking-tight">Members</h1>
      <p className="text-muted-foreground">
        This page shows the members of your team.
      </p>
      <div className="mt-4">
        <Avatars />
      </div>
      <div>
        <p className="text-muted-foreground">
          This page is under construction. More features will be added soon.
        </p>
        <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MemberHoldings />
              </CardContent>
        </Card>

      </div>
    </div>

  );
}