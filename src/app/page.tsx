import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen bg-white p-2 flex justify-center items-center'>
      <head>
        <meta property='og:image' content='https://drive.google.com/file/d/1IaZLNH_CnhLvfEAD4-sFiXzEx4nULQWq/view?usp=sharing' />
      </head>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-[3.5rem]'>Hi! I'm Tarreq.</h1>
        <p className='font-semibold text-lg'>This site is under construction🔨⚙️.</p>
      </div>
    </main>
  )
}
