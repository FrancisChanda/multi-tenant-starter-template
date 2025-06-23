//export default function Page() {
//  return (
//    <div>
//      <h1>New Data</h1>
//    </div>
//  )
//}

import { createClient } from '@/utils/supabase/server';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';


export default async function LoanTable() {
  const supabase = await createClient();
  const { data: loans } = await supabase.from("Loans").select();

  //return <pre>{JSON.stringify(loans, null, 2)}</pre>
return (
    <Table>
    <TableCaption>Total Loans Issued</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
  </TableHeader>
      <TableBody>
        {loans?.map((loan: any) => (
          <TableRow key={loan.id}>
            {/* Replace these cells with the actual keys from your JSON object */}
            <TableCell className="w-[100px]">{loan.id}</TableCell>
            <TableCell>{loan.first_name}</TableCell>
            <TableCell>{loan.last_name}</TableCell>
            <TableCell className="text-right">{loan.loan_amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );


}