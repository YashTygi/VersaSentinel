'use client'


import { FC, useState } from 'react'
import {
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerClose,
} from "@/components/ui/drawer"
import { toast } from "sonner"
import { Separator } from '@/components/ui/separator'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

const DrawerForm: FC = () => {
  
  const { register, handleSubmit, formState: { isValid } } = useForm({
    mode: 'onChange',
  })

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  // const onSubmit = async (data: any, e: any) => {
  //   let base64 = "";
  //   e.preventDefault();
  //   const audioFile = data.audio[0];
  //   if (audioFile) {
  //     try {
  //       base64 = await convertToBase64(audioFile);
  //       console.log('Audio file as base64:', base64);
  //     } catch (error) {
  //       console.error('Error converting audio to base64:', error);
  //     }
  //     console.log(data)
  //   }

  //   try{
  //     const response = await fetch('https://veersa-hack.onrender.com/transcribe', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         audio_base64: base64,
  //       }),
  //     }) 

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     console.log('Success:', result);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }

  //   try{
  //     const response = await fetch('http://localhost:3000/api/Patient', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         patientID: data.patientID,
  //         name: data.name,
  //         phone: data.phone,
  //         age: data.age,
  //         gender: data.gender,
  //         date: data.date}),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     console.log('Success:', result);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  const onSubmit = async (data: any, e: any) => {
    let base64 = "";
    let transcript = "";
    let sentiment;
    let speaker;
    let totalfillerwords;
    let totatime;
    let condition = [];
    let medications = [];

    e.preventDefault();
    
    const audioFile = data.audio[0];
    if (audioFile) {
      try {
        base64 = await convertToBase64(audioFile);
        console.log('Audio file as base64:', base64);
      } catch (error) {
        console.error('Error converting audio to base64:', error);
        return; // Stop further execution if there's an error
      }
    }
  
    try {
      const response = await fetch('https://veersa-hack.onrender.com/transcribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          audio_base64: base64,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Success:', result);
  
      // Process the result and alert it
      if (result && result.length > 0) {
        transcript = result[0].complete_transcript || "No transcript available";
        sentiment = result[0].average_sentiment || 0;
        speaker = result[0].speaker || 0;
        totalfillerwords = result[0].total_filler_words || 0;
        totatime = result[0].total_time || 0;
        condition = result[0].conditions || [];
        medications = result[0].medications || [];

        // Process the other properties

        const alertMessage = `Data has arrived`;
        alert(alertMessage);
      } else {
        alert('No data received from the server');
      }
  
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing the audio');
    }
  
    // Proceed with the second API call if necessary
    try {
      const response = await fetch('http://localhost:3000/api/Patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patientID: data.patientID,
          name: data.name,
          phone: data.phone,
          age: data.age,
          gender: data.gender,
          date: data.date
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Success:', result);
  
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving patient data');
    }


    const patientData = {
      patientID: data.patientID,
      transcription: transcript,
      sentiment: sentiment,
      speaker: speaker,
      totalfillerwords: totalfillerwords,
      totatime: totatime,
      condition: condition,
      medications: medications,
    };

    localStorage.setItem(data.patientID, JSON.stringify(patientData));
  }
  

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle className="text-[48px] font-bold w-[500px] mb-[10px] leading-tight">Create new <span className='text-sky-500'>Patient</span> Analysis</DrawerTitle>
      </DrawerHeader>
      <div className="flex items-center justify-between flex-row-reverse gap-0">
        <p className="text-[16px] w-[170px] pr-4 text-right text-slate-500">Patients Information</p>
        <Separator className="w-[1480px] ml-4" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-8 p-4 mt-2 items-end'>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="id">Patient ID</Label>
            <Input {...register("patientID", { required: true })} type="string" id="pid" placeholder="e.g. PDI0453" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input {...register("name", { required: true })} type="name" id="name" placeholder="e.g. John Doe" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="age">Age</Label>
            <Input {...register("age", { required: true })} type="number" id="age" placeholder="e.g. 23" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="gender">Gender</Label>
            <Input {...register("gender", { required: true })} type="text" id="gender" placeholder="e.g. Male" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone">Contact Number</Label>
            <Input {...register("phone", { required: true })} type="tel" id="phone" placeholder="e.g. 9988776655" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="emergencyphone">Emergency Contact Number</Label>
            <Input {...register("emergencynumber", { required: true })} type="tel" id="emergencyphone" placeholder="e.g. 9988776655" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="date">Date</Label>
            <Input {...register("date", { required: true })} type="date" id="date" placeholder="e.g. 2022-01-01" />
          </div>
        </div>

        <div className="flex items-center justify-between flex-row-reverse gap-0">
          <p className="text-[16px] w-[170px] pr-4 text-right text-slate-500">Audio Conversation</p>
          <Separator className="w-[1480px] ml-4" />
        </div>

        <div className='grid grid-cols-2 grid-rows-1 gap-x-4 gap-y-8 p-4 mt-2 items-center '>
          <div className='flex w-full max-w-sm items-end space-x-2'>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="audio">Audio</Label>
              <Input {...register("audio", { required: true })} id="audio" type="file" accept="audio/*" />
            </div>
          </div>
          <div className='flex w-full'>
            <span className="text-orange-600 font-bold text-5xl">*</span>
            <p className='underline underline-offset-2 text-[16px]'>Before uploading, ensure you have obtained and documented explicit consent from the patient for recording and analyzing this conversation. Your commitment to patient privacy and legal compliance is crucial for the ethical use of this platform.</p>
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button type="submit" disabled={!isValid}>Submit</Button>
          </DrawerClose>
        </DrawerFooter>
      </form>
    </DrawerContent>
  )
}

export default DrawerForm