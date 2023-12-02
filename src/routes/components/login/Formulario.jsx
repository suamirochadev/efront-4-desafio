


const Formulario = () => {
  return (
    
    <section>
      <div className='bg-[#F7FAFC] flex flex-row items-center justify-between h-[902px] w-full'>
        <div className='flex items-center justify-center w-full'>
        <img src="/bg-img.png" alt="" width={400} height={330}/>
        </div>
        <DefaultColumn>
        <DefaultInput name="E-mail" />
        <DefaultInput name="Password" />
        </DefaultColumn>
        <InputRadio tet="Lembrar de mim"/>
      </div>
    </section>
  )
}
const DefaultInput = () => {
  return (
    <>
      <label className='my-[10px] block text-base font-medium text-dark dark:text-[#1A202C]'>
      {''}
      </label>
      <input
        type='text'
        placeholder='Default Input'
        className='w-[340px] h-[40px] bg-slate-40 rounded-md border border-stroke dark:border-[#E8E8E8] py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
    </>
  )
}
const InputRadio = () => {
  return (
    <>
      <input
        type="radio"
        name="topping"
        value="Regular"
        id="regular"
        checked={true}
      > {''} </input>
    </>
  )
}

const DefaultColumn = () => {
  return (
    <>
      <div className='w-3/4 p-5 flex-col items-center justify-center bg-[#FFFFFF] h-full'>
        <div className='m-12 p-3 flex-col gap-3'>{''}</div>
      </div>
    </>
  )
}

export default Formulario

