'use client'
import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Inter } from 'next/font/google'
import LoginForm from '@/components/LoginForm/LoginForm'

const inter = Inter({ subsets: ['latin'] })

interface PageProps {}

interface FormData {
  email: string
  password: string
}

const Page: FC<PageProps> = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <div className={inter.className}>
        <LoginForm />
      <div className="main flex w-[70%] h-[90vh] my-[2rem] mx-auto bg-[#F6F6F6]">
        <div className="imgsection relative w-[30%]">
          <h1 className='absolute text-2xl font-bold top-[1rem] left-[1rem]'>Sentinel</h1>
          <img className='h-full' src="#" alt="" />
          <h1 className='absolute bottom-[3rem] w-[70%] left-[3rem] text-[1.1rem] text-white'>Empowering Healthcare Through AI-Driven Adverse Event Detection</h1>
        </div>
        <div className="formsection flex flex-col w-[70%] p-[4rem]">
          <div className="heading">
            <h1 className='text-3xl font-bold'>Revolutionize Patient Safety with AI-Powered Conversation Analysis</h1>
            <h6 className='text-[1.2rem]'>Detect and prevent diverse events before they occur using advanced AI to analyze patient-provider conversation in real time.</h6>
          </div>
          <div className="form p-[4rem]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sub">
                <p className='font-bold my-[0.5rem]'>EMAIL ID</p>
                <input 
                  {...register('email')}
                  className='mb-[1rem] border-solid border-2 border-black w-[100%] rounded-md h-[2rem] px-2' 
                  type="email" 
                  placeholder='email id'  
                />
              </div>
              <div className="sub relative">
                <p className='font-bold my-[0.5rem]'>PASSWORD</p>
                <input 
                  {...register('password')}
                  className='border-solid border-2 border-black w-[100%] rounded-md h-[2rem] px-2' 
                  type="password" 
                  placeholder='password' 
                />
              </div>
              <button 
                type="submit"
                className='bg-[#0184BC] text-white mt-[2rem] w-full h-[2rem] rounded-lg text-[1rem]'
              >
                Login as a Personnel
              </button>
              <p className='mt-[1rem]'>
                Are you an admin? <span className='mx-[0.4rem] font-bold text-[grey] cursor-pointer'>Get Access</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page