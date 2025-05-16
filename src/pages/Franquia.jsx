import ModelosFranquia from "../components/ModelosFranquia"

const Franquia = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center w-full px-[40px] md:px-[70px] lg:px-[30px] xl:px-[135px] py-[80px] md:py-[95px] lg:py-[110px] xl:py-[135px] gap-[80px] lg:gap-[140px] xl:gap-[200px]">
                <ModelosFranquia 
                    titulo="Tiamate Coffee" 
                    espaco={"30 a 45m²"}
                    faturamento={"R$ 40 MIL"}
                    royaltyes={"5% do faturamento.\n (Valor mínimo R$ 2.000,00)"}
                    marketing={"2% do faturamento"}
                    equilibrio={"2 a 3 Meses"}
                    retorno={"18 a 24 Meses"}
                    lucro={"25%"}
                    investimento={"R$ 130 MIL"}
                />
                <ModelosFranquia 
                    titulo="Tiamate Coffee To Go" 
                    espaco={"8 a 12m²"}
                    faturamento={"R$ 25 MIL"}
                    royaltyes={"5% do faturamento.\n (Valor mínimo R$ 1.500,00)"}
                    marketing={"2% do faturamento"}
                    equilibrio={"2 a 3 Meses"}
                    retorno={"18 a 24 Meses"}
                    lucro={"25%"}
                    investimento={"R$ 100 MIL"}
                />
            </section>
        </>
    );
}

export default Franquia;