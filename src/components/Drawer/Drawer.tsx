'use client'


import { FC } from 'react'
import {
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Separator } from '@/components/ui/separator'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

const DrawerForm: FC = () => {
  const { register, handleSubmit } = useForm()

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  const onSubmit = async (data: any) => {
    const audioFile = data.audio[0];
    if (audioFile) {
      try {
        const base64Audio = await convertToBase64(audioFile);
        console.log('Audio file as base64:', base64Audio);
      } catch (error) {
        console.error('Error converting audio to base64:', error);
      }
    }
    console.log('Form data:', data);
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
            <Input {...register("patientId")} type="string" id="pid" placeholder="e.g. PDI0453" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input {...register("name")} type="name" id="name" placeholder="e.g. John Doe" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="age">Age</Label>
            <Input {...register("age")} type="number" id="age" placeholder="e.g. 23" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="gender">Gender</Label>
            <Input {...register("gender")} type="text" id="gender" placeholder="e.g. Male" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone">Contact Number</Label>
            <Input {...register("contactnumber")} type="tel" id="phone" placeholder="e.g. 9988776655" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="emergencyphone">Emergency Contact Number</Label>
            <Input {...register("emergencynumber")} type="tel" id="emergencyphone" placeholder="e.g. 9988776655" />
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
              <Input {...register("audio")} id="audio" type="file" accept="audio/*" />
            </div>
          </div>
          <div className='flex w-full'>
            <span className="text-orange-600 font-bold text-5xl">*</span>
            <p className='underline underline-offset-2 text-[16px]'>Before uploading, ensure you have obtained and documented explicit consent from the patient for recording and analyzing this conversation. Your commitment to patient privacy and legal compliance is crucial for the ethical use of this platform.</p>
          </div>
        </div>

        <DrawerFooter>
          <Button type="submit">Submit</Button>
        </DrawerFooter>
      </form>
    </DrawerContent>
  )
}

export default DrawerForm