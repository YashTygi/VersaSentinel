import { Credentials, columns } from "./columns"
import { DataTable } from "../../../components/data-table/data-table-overview"
import Navbar from "@/components/navbar/nav"


async function getData(): Promise<Credentials[]> {
  // Fetch data from your API here.
  return [
    {
      id: "a7b3c9d1",
      patientID: "P1001",
      name: "John Doe",
      phone: "555-123-4567",
      age: 45,
      gender: "Male",
      date: "2024-08-11",
      analysis: "In Progress",
      riskFactor: "....",
    },
    {
      id: "e5f2g8h6",
      patientID: "P1002",
      name: "Jane Smith",
      phone: "555-987-6543",
      age: 32,
      gender: "Female",
      date: "2024-08-10",
      analysis: "In Progress",
      riskFactor: "....",
    },
    {
      id: "i4j9k1l3",
      patientID: "P1003",
      name: "Robert Johnson",
      phone: "555-246-8135",
      age: 58,
      gender: "Male",
      date: "2024-08-09",
      analysis: "Pending",
      riskFactor: "....",
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="p-6 flex justify-top flex-col m-0 h-screen relative">
      <Navbar />
      <DataTable columns={columns} data={data} />
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-slate-500">Click the <span className="text-sky-500">Add New Analysis button</span> to add <br /> the patient data and conversation </p>
    </div>
  )
}
