
import { ChartBarInteractive } from "@/app/dashboard/[teamId]/geographies/visitations";

export default function Geographies() {
  return (
    <div className="flex-1 flex-col space-y-4 p-8 pt-6">
        <h1 className="text-2xl font-bold tracking-tight">Geographies</h1>
        <p className="text-muted-foreground">
            This page shows the geographies of your team.
        </p>
        <div className="mt-4">
            <ChartBarInteractive />
        </div>

    </div>
  );
}