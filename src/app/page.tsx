import Head from "next/head"

export default function Home() {
  return (
    
    <main className='min-height-screen bg-white p-2 flex justify-center items-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-[3rem] text-center'>Tarreq Maulana</h1>
        <div className='flex flex-col items-center justify-center text-center gap-1'>
        <p className='font-light text-l'>A generalist final-year Computer Science student at Universitas Indonesia.</p>
        <p className='font-semibold text-l'>Passionate about leveraging technology to solve real-world problems 💻⚙️</p>
        </div>
      </div>
    </main>
  )
}
