import { Credentials, columns } from "./columns"
import { DataTable } from "../../../components/data-table/data-table-overview"
import Navbar from "@/components/navbar/nav"
import AnimatedCounter from "@/components/AnimatedCounter/animatedCounter"
import DataBox from "@/components/data-box/dataBox"



async function getData(): Promise<Credentials[]> {
  const res = await fetch('http://localhost:3000/api/Patient', {
    cache: 'no-store',
    next: { revalidate: 0 },
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  console.log('Response status:', res.status)
  const data = await res.json()
  console.log('Full data:', data)
  return data
}

export default async function DemoPage() {
  const data = await getData()

  console.log(data)

  return (
    <div className=" p-6 flex justify-top flex-col m-0 h-screen">
      <Navbar />
      <div className="flex flex-row gap-4 items-center justify-between">
        <DataBox heading="Total Conversations Analysed" content="Total number of conversation analysed till now" from={0} to={84} duration={5} />
        <DataBox heading="Potential adverse events detected" content="Cases detected in last 24 hours that can be potentially adverse" from={0} to={0} duration={2}/>
        <DataBox heading="High-risk cases requiring attention" content="Total number of cases with High-risk, that might require immediate attention" from={0} to={5} duration={2} />
        <DataBox heading="In-Process Analysis" content="Number of Processes that are currently being analysed" from={0} to={2} duration={2} />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
