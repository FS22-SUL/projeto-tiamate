import { useState } from "react"
import checkIcon from "../assets/FranquiaImgs/checkIcon.png"
import imgTiamateG1 from "../assets/FranquiaImgs/tiamate/tiamateG1.png"
import imgTiamateG2 from "../assets/FranquiaImgs/tiamate/tiamateG2.png"
import imgTiamateG3 from "../assets/FranquiaImgs/tiamate/tiamateG3.png"
import imgTiamateG4 from "../assets/FranquiaImgs/tiamate/tiamateG4.png"
import imgTiamateG5 from "../assets/FranquiaImgs/tiamate/tiamateG5.png"
import imgTiamateP1 from "../assets/FranquiaImgs/tiamate/tiamateP1.png"
import imgTiamateP2 from "../assets/FranquiaImgs/tiamate/tiamateP2.png"
import imgTiamateP3 from "../assets/FranquiaImgs/tiamate/tiamateP3.png"
import imgTiamateP4 from "../assets/FranquiaImgs/tiamate/tiamateP4.png"
import imgTiamateP5 from "../assets/FranquiaImgs/tiamate/tiamateP5.png"
import imgToGoG1 from "../assets/FranquiaImgs/toGo/toGoG1.png"
import imgToGoG2 from "../assets/FranquiaImgs/toGo/toGoG2.png"
import imgToGoG3 from "../assets/FranquiaImgs/toGo/toGoG3.png"
import imgToGoG4 from "../assets/FranquiaImgs/toGo/toGoG4.png"
import imgToGoG5 from "../assets/FranquiaImgs/toGo/toGoG5.png"
import imgToGoP1 from "../assets/FranquiaImgs/toGo/toGoP1.png"
import imgToGoP2 from "../assets/FranquiaImgs/toGo/toGoP2.png"
import imgToGoP3 from "../assets/FranquiaImgs/toGo/toGoP3.png"
import imgToGoP4 from "../assets/FranquiaImgs/toGo/toGoP4.png"
import imgToGoP5 from "../assets/FranquiaImgs/toGo/toGoP5.png"

const ModelosFranquia = ({
  titulo,
  espaco,
  faturamento,
  royaltyes,
  marketing,
  equilibrio,
  retorno,
  lucro,
  investimento,
 }) => {
  const [imagemSelecionada, setImagemSelecionada] = useState(0)

  const imagensG = titulo === "Tiamate Coffee"
    ? [imgTiamateG1, imgTiamateG2, imgTiamateG3, imgTiamateG4, imgTiamateG5]
    : [imgToGoG1, imgToGoG2, imgToGoG3, imgToGoG4, imgToGoG5]

  const imagensP = titulo === "Tiamate Coffee"
    ? [imgTiamateP1, imgTiamateP2, imgTiamateP3, imgTiamateP4, imgTiamateP5]
    : [imgToGoP1, imgToGoP2, imgToGoP3, imgToGoP4, imgToGoP5]

  return ( 
    <>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-[30px] xl:gap-0">
        <div className="flex flex-col gap-[20px] xl:gap-[30px]">
          <div className="flex flex-col items-center lg:items-start">
            <p className="font-[400] text-md xl:text-lg text-marrom leading-[100%]">
              Cafeteria
            </p>
            <h1 className="font-[700] text-[32px] xl:text-[44px] text-bege leading-[100%]">
              {titulo}
            </h1>
          </div>
          <ul className=" flex flex-col justify-center items-start gap-[15px] xl:gap-[25px] text-md xl:text-lg text-marrom leading-[100%]">
            <li className="flex justify-center items-center gap-[10px] xl:gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <p className="font-[400]">
                <strong className="font-[700] mr-1">Espaço:</strong>
                {espaco}
              </p>
            </li>
            <li className="flex justify-center items-center gap-[10px] xl:gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <p className="font-[400]">
                <strong className="font-[700] mr-1">Faturamento Médio:</strong>
                {faturamento}
              </p>
            </li>
            <li className="flex justify-center items-center gap-[10px] xl:gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <p className="font-[400] whitespace-pre-line">
                <strong className="font-[700] mr-1">Royalties:</strong>
                {royaltyes}
              </p>
            </li>
            <li className="flex justify-center items-center gap-[10px] xl:gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <p className="font-[400]">
                <strong className="font-[700] mr-1">Taxa de Marketing:</strong>
                {marketing}
              </p>
            </li>
            <li className="flex justify-center items-center gap-[10px] xl:gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <p className="font-[400]">
                <strong className="font-[700] mr-1">Ponto de Equilíbrio</strong>
                {equilibrio}
              </p>
            </li>
            <li className="flex justify-center items-center gap-[10px] xl:gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <p className="font-[400]">
                <strong className="font-[700] mr-1">Prazo de Retorno:</strong>
                {retorno}
              </p>
            </li>
            <li className="flex justify-center items-center gap-[10px] xl:gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <p className="font-[400]">
                <strong className="font-[700] mr-1">Lucro Médio:</strong>
                {lucro}
              </p>
            </li>
            <li className="flex justify-center items-center gap-[10px] xl:gap-[20px]">
              <img src={checkIcon} alt="Check icone" />
              <p className="font-[400]">
                <strong className="font-[700] mr-1">Investimento total estimado:</strong>
                {investimento}
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-[8px] md:gap-[15px]">
          <img
            className="flex-1 rounded-[5px] lg:w-[400px] lg:h-[420px] xl:w-[500px] xl:h-[515px]"
            src={imagensG[imagemSelecionada]}
            alt="Imagem franquia Tiamate"
          />
          <div className="flex flex-row lg:flex-col justify-between gap-[8px] md:gap-[15px]">
            {imagensP.map((imagem, index) => (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => setImagemSelecionada(index)}
              >
                <img
                  className="rounded-[5px] lg:w-[100px] xl:w-[150px]"
                  src={imagem}
                  alt="Imagem franquia Tiamate"
                />
                {imagemSelecionada === index && (
                  <div className="absolute inset-0 bg-creme opacity-20 rounded-[5px]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
   );
}
 
export default ModelosFranquia;