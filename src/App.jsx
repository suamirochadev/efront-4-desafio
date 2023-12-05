

function App() {
  return (
    <>
    <main className="flex items-center">
      <section className="bg-[#F7FAFC] flex items-center justify-center w-full h-[902px]">
        <img src="./bg-img.png" alt="" />
      </section>
      <div className="flex flex-col items-center justify-center h-[902px] w-full bg-white">
        <div>
            <div className="py-10">
              <h2 className="font-serif text-base color-[#1A202C]">Bem vindo de volta</h2>
              <h1 className="font-serif color-[#1A202C] font-bold text-2xl">
                Faça login na sua conta
              </h1>
            </div>
            <div className="h-[456px] w-lg flex-col ">
            <form action="" method="get">
              <div className="w-full h-[50px] flex flex-col mb-5">
                <label htmlFor="email" className="font-sans text-base color-[#1A202C]">Email</label>
                <input type="email" name="email" id="email" placeholder="codelandia@gmail.com" className="py-4 pl-5 border-[#E8E8E8] border focus:border-[#E8E8E8] outline-[#E8E8E8] w-full"  required />
              </div>
              <div className="my-10 w-full h-[50px] flex flex-col mb-5">
                <label htmlFor="password" className="font-sans text-base color-[#1A202C]">Senha</label>
                <input type="password" name="password" id="password" className="py-4 pl-5 rounded-lg border-[#E8E8E8] border focus:border-[#E8E8E8] outline-[#E8E8E8] w-full" placeholder="*********" required />
              </div>
              <div className="my-10 flex flex-wrap items-center justify-between gap-3 mb-5" >
                <div className="flex gap-3">
                  <input type="radio" name="option1"/>
                  <label htmlFor="radio">Lembrar de mim </label>
                </div>
                <a href="#" className="text-base font-sans text-[#2B6CB0]">Esqueceu sua senha?</a>
              </div>
              <div className="gap-4 text-white w-[340px]">
                <button type="submit" className="flex items-center justify-center w-full py-4  bg-[#04C35C] rounded-lg font-bold my-5">Entrar</button>
                <button type="submit" className="relative flex items-center justify-center py-4 bg-[#1A202C] w-full rounded-lg font-bold">
                  <span className="inset-y-0 left-12 flex items-center px-2">
                    <img src="./google-icon.svg" alt=""/>
                  </span>
                    Ou faça o login com o Google
                </button>
              </div>
            </form>
            <div className="m-5">
              <p>Não tem uma conta? <a href="#" className="text-[#2B6CB0]">Cadastre-se</a></p>
            </div>
            </div>
          </div>
        </div>
    </main>
    </>
  )
}

export default App
