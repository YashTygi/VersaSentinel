import { FC } from 'react'
import AnimatedCounter from '../AnimatedCounter/animatedCounter'

interface dataBoxProps {
  heading: string,
  content: string,
  from: number,
  to: number,
  duration?: number
}

const DataBox: FC<dataBoxProps> = ({heading, content, from, to, duration}) => {
  return( 
    <div className='flex bg-white p-5 border rounded-lg w-1/4 h-40 flex-row items-center gap-6 mt-4 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]'>
        <AnimatedCounter from={from} to={to} duration={duration} />
        <div className='flex flex-col gap-1'>
          <h3 className='text-xl font-bold'>{heading}</h3>
          <p className='text-sm'>{content}</p>
        </div>
    </div>
 )
}

export default DataBox