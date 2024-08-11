import { Credentials, columns } from "./columns"
import { DataTable } from "../../../components/data-table/data-table-overview"
import Navbar from "@/components/navbar/nav"
import AnimatedCounter from "@/components/AnimatedCounter/animatedCounter"
import DataBox from "@/components/data-box/dataBox"



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
    {
      id: "m2n7o5p8",
      patientID: "P1004",
      name: "Emily Brown",
      phone: "555-369-2580",
      age: 27,
      gender: "Female",
      date: "2024-08-08",
      analysis: "Done",
      riskFactor: "Low",
    },
    {
      id: "q6r1s3t9",
      patientID: "P1005",
      name: "Michael Wilson",
      phone: "555-741-8520",
      age: 52,
      gender: "Male",
      date: "2024-08-07",
      analysis: "Done",
      riskFactor: "Medium",
    },
    {
      id: "u8v4w2x7",
      patientID: "P1006",
      name: "Sarah Davis",
      phone: "555-159-7532",
      age: 39,
      gender: "Female",
      date: "2024-08-06",
      analysis: "Done",
      riskFactor: "Low",
    },
    {
      id: "y5z0a2b4",
      patientID: "P1007",
      name: "David Martinez",
      phone: "555-852-9630",
      age: 61,
      gender: "Male",
      date: "2024-08-05",
      analysis: "Done",
      riskFactor: "Medium",
    },
    {
      id: "c7d3e9f1",
      patientID: "P1008",
      name: "Lisa Anderson",
      phone: "555-753-9514",
      age: 29,
      gender: "Female",
      date: "2024-08-04",
      analysis: "Done",
      riskFactor: "Low",
    },
    {
      id: "g2h8i4j6",
      patientID: "P1009",
      name: "Thomas Taylor",
      phone: "555-951-7532",
      age: 47,
      gender: "Male",
      date: "2024-08-03",
      analysis: "Done",
      riskFactor: "High",
    },
    {
      id: "k1l7m3n9",
      patientID: "P1010",
      name: "Jennifer Clark",
      phone: "555-357-1593",
      age: 35,
      gender: "Female",
      date: "2024-08-02",
      analysis: "Done",
      riskFactor: "Medium",
    },
    {
      id: "o5p2q8r4",
      patientID: "P1011",
      name: "William White",
      phone: "555-258-1470",
      age: 55,
      gender: "Male",
      date: "2024-08-01",
      analysis: "Done",
      riskFactor: "High",
    },
    {
      id: "s6t1u3v9",
      patientID: "P1012",
      name: "Patricia Moore",
      phone: "555-963-8520",
      age: 42,
      gender: "Female",
      date: "2024-07-31",
      analysis: "Done",
      riskFactor: "Medium",
    },
    {
      id: "w7x4y0z2",
      patientID: "P1013",
      name: "James Lee",
      phone: "555-741-9630",
      age: 50,
      gender: "Male",
      date: "2024-07-30",
      analysis: "Done",
      riskFactor: "Medium",
    },
    {
      id: "a9b5c1d7",
      patientID: "P1014",
      name: "Barbara Walker",
      phone: "555-852-7410",
      age: 68,
      gender: "Female",
      date: "2024-07-29",
      analysis: "Done",
      riskFactor: "High",
    },
    {
      id: "e3f8g2h4",
      patientID: "P1015",
      name: "Richard Hall",
      phone: "555-369-1470",
      age: 37,
      gender: "Male",
      date: "2024-07-28",
      analysis: "Done",
      riskFactor: "Low",
    },
    {
      id: "i6j1k9l5",
      patientID: "P1016",
      name: "Elizabeth Young",
      phone: "555-147-2580",
      age: 44,
      gender: "Female",
      date: "2024-07-27",
      analysis: "Done",
      riskFactor: "Low",
    },
    {
      id: "m8n4o0p2",
      patientID: "P1017",
      name: "Joseph Allen",
      phone: "555-258-3690",
      age: 53,
      gender: "Male",
      date: "2024-07-26",
      analysis: "Done",
      riskFactor: "Medium",
    },
    {
      id: "q3r7s5t1",
      patientID: "P1018",
      name: "Margaret King",
      phone: "555-963-7410",
      age: 71,
      gender: "Female",
      date: "2024-07-25",
      analysis: "Done",
      riskFactor: "Medium",
    },
    {
      id: "u9v2w8x4",
      patientID: "P1019",
      name: "Charles Scott",
      phone: "555-741-2580",
      age: 49,
      gender: "Male",
      date: "2024-07-24",
      analysis: "Done",
      riskFactor: "High",
    },
    {
      id: "y1z6a4b0",
      patientID: "P1020",
      name: "Susan Green",
      phone: "555-852-3690",
      age: 33,
      gender: "Female",
      date: "2024-07-23",
      analysis: "Done",
      riskFactor: "Low",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

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
