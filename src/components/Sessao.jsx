import sessaoImg from "../assets/cafe27.png"
import sessaoImg1 from "../assets/cafe28.png"
import sessaoImg2 from "../assets/cafe29.png"
import sessaoImg3 from "../assets/cafe30.png"

const Sessao = () => {
    return ( 
        <>
            <section className="flex flex-col-reverse items-center gap-8 py-14 md:py-[78px] lg:flex-row lg:py-[80px] lg:px-18 lg:gap-[130px] justify-center">
                <div className="w-[300px] md:w-[600px] lg:w-[470px] lg:h-[228px]:">
                    <h2 className="text-bege text-[30px] md:text-[50px] lg:text-[45px] font-bold">Colheita</h2>
                    <p className="text-marrom lg:text-[14px]">A colheita acontece quando a maioria dos frutos já estão maduros. Tudo começa com uma seleção criteriosa das sementes de café. Elas são escolhidas, plantadas e mantidas em viveiros especiais, que darão origem às mudas.<br /><br /> As plantinhas passam por diversas etapas de crecimento e quanod alcançam de quatro a seis pares de fohas em seus galhos, são levadas para os solos que abrigarão o cafezal.
                    </p>
                </div>
                
                <img src={sessaoImg} alt=""className="w-[300px] md:w-[600px] lg:w-[400px]" />
            
            </section>
            <section className="flex flex-col items-center gap-8 py-14 bg-cinza md:py-[78px] lg:flex-row lg:py-[80px] lg:px-18 lg:gap-[130px] justify-center">
                
                <img src={sessaoImg1} alt=""className="w-[300px] md:w-[600px] lg:w-[400px]" />
                
                <div className="w-[300px] md:w-[600px] lg:w-[470px] lg:h-[228px]">
                    <h2 className="text-bege text-[30px] md:text-[50px] lg:text-[45px] font-bold">Torragem</h2>
                    <p className="text-marrom lg:text-[14px]">Este procedimento é todo controlado por operadores à distância. Quando o café alcança a temperatura de 140°C, acontecem interações entre as proteínas, gorduras e açúcares presentes nele.<br /><br />Cada café possui uma curva de torra, então, a temperatura e o tempo podem variar. Secos, os grãos descansam por três horas e perdem gás carbônico. Em seguida, estão prontos para serem pesados e armazenados.
                    </p>
                </div>
            </section>
            <section className="flex flex-col-reverse items-center gap-8 py-14 md:py-[78px] lg:flex-row lg:py-[80px] lg:px-18 lg:gap-[130px] justify-center">
                <div className="w-[300px] md:w-[600px] lg:w-[470px] lg:h-[228px]">
                    <h2 className="text-bege text-[30px] md:text-[50px] lg:text-[45px] font-bold">Moagem</h2>
                    <p className="text-marrom lg:text-[14px]">Ela é feita através da combinação de diversos tipos de café. Esta “mistura” varia de acordo com o perfil do consumidor, podendo ser um produto gourmet, que leva toques mais suaves; do tipo forte, que é mais amargo e menos ácido; ou até mesmo aromático, que conta com sabores adicionais.<br /><br /> A mistura é preparada mecanicamente. Então, ela é encaminhada para um rolo mecânico, que quebrará os grãos, até chegar à granulometria ideal do produto. Depois da moagem, o café deve descansar por três horas para liberar mais gás carbônico.
                    </p>
                </div>
                
                <img src={sessaoImg2} alt=""className="w-[300px] md:w-[600px] lg:w-[400px]" />
            
            </section>
            <section className="flex flex-col items-center gap-8 py-14 bg-cinza md:py-[78px] lg:flex-row lg:py-[80px] lg:px-18 lg:gap-[130px] justify-center">
                
                <img src={sessaoImg3} alt=""className="w-[300px] md:w-[600px] lg:w-[400px]" />
                
                <div className="w-[300px] md:w-[600px] lg:w-[470px] lg:h-[228px]">
                    <h2 className="text-bege text-[30px] md:text-[50px] lg:text-[45px] font-bold">Classificação</h2>
                    <p className="text-marrom lg:text-[14px]">Para que os grãos sejam armazenados, eles passam por “testes”, que os classificarão de acordo com a qualidade. Depois de moídos, os grãos são colocados em um aparelho que irá enviar raios infravermelhos ao pó de café.<br /><br /> De acordo com a luminescência refletida, o produto é classificado em números, que apontam uma variedade mais fraca ou mais forte.
                    </p>
                </div>
            </section>
        </>
    );
}
 
export default Sessao;