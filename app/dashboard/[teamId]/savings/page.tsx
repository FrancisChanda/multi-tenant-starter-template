import { Card, CardContent,CardHeader,CardTitle } from "@/components/ui/card"
import { columns, Saving } from "./savings_columns"
import { DataTable } from "./savings_data_table"
import SavingsForm from "./savings_form"

async function getData(): Promise<Saving[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      date: "2023-10-01",
      status: "pending",
      name: "m@example.com",
      amount: 100,
    }
  ]
}

export default async function SavingPage() {
  const data = await getData()

  return (

    <div className="container mx-auto py-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">Savings</h1>
        <p className="text-muted-foreground mb-6">
          Manage your savings and track your financial progress.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-7">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>New Saving</CardTitle>
          </CardHeader>
          <CardContent>
           <SavingsForm/>
          </CardContent>
        </Card>
      <Card className="col-span-5">
      <CardHeader>
        <CardTitle>Savings</CardTitle>
      </CardHeader>
          <CardContent>
      <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
      </div>
    </div>

  )
}