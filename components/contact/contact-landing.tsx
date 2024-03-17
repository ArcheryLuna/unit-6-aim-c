import { Spotlight } from '@/components/ui/spotlight';

export default function ContactLanding() {
  return (
    <div className="h-[80vh] relative flex justify-center items-center">
        <Spotlight className='lg:ml-20'/>
        <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-center">Contact Us</h1>
            <p className="text-center text-lg lg:text-2xl text-muted-foreground">We&apos;d love to hear from you!</p>
        </div>
        <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
        <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/2 blur-sm" />
        <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/2" />
    </div>
  )
}
