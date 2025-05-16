  import React, { useEffect, useState } from "react";
  import { motion } from "framer-motion";
  import setaEsquerda from "../assets/Tiamatino-imagens/seta esquerda.png";
  import setaDireita from "../assets/Tiamatino-imagens/seta direita.png";

  export default function Cardapio() {
    const [produtos, setProdutos] = useState([]);
    const [indexAtivo, setIndexAtivo] = useState(0);

    useEffect(() => {
      const buscarProdutos = async () => {
        try {
          const resposta = await fetch("http://localhost:4000/cardapio");
          const dados = await resposta.json();
          setProdutos(dados);
        } catch (erro) {
          console.error("Erro ao buscar produtos:", erro);
        }
      };

      buscarProdutos();
    }, []);

    const anterior = () => {
      setIndexAtivo((prev) => (prev - 1 + produtos.length) % produtos.length);
    };

    const proximo = () => {
      setIndexAtivo((prev) => (prev + 1) % produtos.length);
    };

    const getProduto = (i) => produtos[(i + produtos.length) % produtos.length];

    const vizinhos = [
      getProduto(indexAtivo - 1),
      getProduto(indexAtivo),
      getProduto(indexAtivo + 1),
    ];

    return (
      <section className="bg-[#e7e1df] w-full flex flex-col items-center py-10 px-4 gap-8">
        {/* Título */}
        <motion.div
          className="sectionTitle flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm md:text-base">Confira nosso</span>
          <h3 className="text-[32px] md:text-[50px] md:text-3xl font-bold text-[#a97744]">
            Cardápio
          </h3>
        </motion.div>

        {/* Carrossel */}
        {produtos.length > 0 && (
          <div className="flex items-center justify-center w-full max-w-6xl">
            <img src={setaEsquerda} onClick={anterior} className="cursor-pointer">            
            </img>

            {vizinhos.map((produto, i) => {
              const isAtivo = i === 1;
              return (
                <div
                  key={produto.id}
                  className={`flex flex-col items-center justify-center ${
                    isAtivo ? "scale-100 opacity-100" : "scale-95 opacity-80"
                  }`}
                >
                  <img
                    src={produto.cardapio_imagem}
                    alt={produto.cardapio_titulo}
                    className={`object-cover rounded-xl transition-transform duration-300 hover:scale-105 ${
                      isAtivo
                        ? "w-52 sm:w-60 md:w-72"
                        : "w-44 sm:w-48 md:w-56"
                    }`}
                  />
                </div>
              );
            })}

            <img src={setaDireita} onClick={proximo} className="cursor-pointer">                     
            </img>
          </div>
        )}

        {/* Botão Ver mais */}
        <motion.div
          className="mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-[#cf9a5a] border-0 px-[80px] py-[8px] sm:px-[152px] sm:py-[16px] text-[18px] rounded hover:brightness-110 transition-all duration-300">
            Ver mais
          </button>
        </motion.div>
      </section>
    );
  }
