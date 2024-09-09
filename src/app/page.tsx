export default function Home() {
  return (
    <main className='min-height-screen bg-white p-2 flex justify-center'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-[3rem] text-center font-semibold'>Tarreq Maulana</h1>
        <div className='flex flex-col items-center justify-center text-center gap-1'>
        <p className='font-light text-l'>A final-year <span className="underline"><a target="_blank" rel="noopener noreferrer" href="https://cs.ui.ac.id">Computer Science</a></span> student at <span className="underline"><a target="_blank" rel="noopener noreferrer" href="https://ui.ac.id">Universitas Indonesia.</a></span></p>
        <p className='font-semibold text-l'>Passionate about leveraging technology to solve real-world problems 💻⚙️</p>
        </div>
      </div>
    </main>
  )
}
