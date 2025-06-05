import logo from "../assets/logo_footer.png"
import grupo from "../assets/grupo_footer.png"

const Footer = () => {
    return (
        <>

            <footer className="  w-full bg-[#292625] text-white px-23 py-15 ">
                <div className="bg-[#292625]">
                    <div className="flex flex-col lg:flex-row justify-between items-center px-2 relative ">
                        <img src={logo} alt="" />
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-12 text-[18px] text-center">
                            <p>Inicio</p>
                            <p>Nosso café</p>
                            <p> Notícias</p>
                            <p>Contato</p>
                            <p>Cardápio</p>
                            <p>Franquia</p>
                        </div>
                    </div>
                </div>
                <br />
                <hr className="border-t border-caramelo bg-[#292625]" /><br />
                <div className=" flex lg:flex-row items-center bg-[#292625] justify-center w-full lg:justify-around ">
                    <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-4">
                        
                        <div className="flex flex-col w-full lg:flex-row items-center justify-start gap-4">
                        <div className="flex lg:flex-row gap-2 flex-col text-center md:text-left">
                            <p>Curta e <br /> </p>
                            <p>Compartilhe</p>
                        </div>
                        
                        <div className="flex items-center bg-[#292625] justify-center gap-4 flex-row ">
                            <a href="#" className=" ">
                                <box-icon type='logo' name='facebook' className="w-[24px] h-[24px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200"></box-icon>
                            </a>

                            <a href="#" className="">
                                <box-icon type='logo' name='instagram' className="w-[24px] h-[24px]    bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme        hover:fill-vinho duration-200"></box-icon>
                            </a>

                            <a href="#" className="text-orange-500">
                                <box-icon type='logo' name='linkedin' className="w-[24px] h-[24px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200"></box-icon>
                            </a>

                            <a href="#" className="text-orange-500">
                                <box-icon type='logo' name='youtube' className="w-[24px] h-[24px] bg-canela rounded-full inline-block p-1 fill-marrom hover:bg-creme hover:fill-vinho duration-200" ></box-icon>
                            </a>
                        </div>




                        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center lg:pl-20 xl:pl-100 ">
                           
                           <p className=" text-[#A97744] px-10 lg:text-nowrap lg:text-left text-center ">© 2021 Tiamate Todos os Direitos Reservados</p>
                          
                           <div className="w-20 ">
                               <img src={grupo} alt="" className="bg-cover" />
                           </div>

                       </div>
                        </div>

                       
                    </div>
                    
                </div>
            </footer>

        </>
    );
}

export default Footer;