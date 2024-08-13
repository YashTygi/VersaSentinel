import connectDB from "@/lib/db"
import Patient from "@/models/schema"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    
    const { patientID, name, phone, age, gender, date, analysis, riskFactor} = await request.json()

    await connectDB()
    await Patient.create({
        patientID, name, phone, age, gender, date
    })
    return NextResponse.json({message: "Patient created"}, {status: 201})
}

export async function GET() {
    await connectDB()
    const patient = await Patient.find({})
    return NextResponse.json(patient)
}