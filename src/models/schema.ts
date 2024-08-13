import mongoose, { Schema } from "mongoose";

const PatientSchema = new Schema({
    patientID: String,
    name: String,
    phone: String,
    age: Number,
    gender: String,
    date: String,
  })

  const SampleSchema = new Schema({
    patientID: String,
    
  })

const Patient = mongoose.models.Patient || mongoose.model("Patient", PatientSchema)

export default Patient