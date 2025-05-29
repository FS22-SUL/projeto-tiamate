import tiamate1 from '../images/tiamate1.png';
import tiamate2 from '../images/tiamate2.png';

const Modelo = () => {
  return (
    <div className="bg-[#f0e9e4] py-10 md:py-16 px-4 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center">

        <div className="hidden md:flex md:w-[200px] lg:w-1/5 justify-center" style={{ marginRight: '-30px' }}>
          <img src={tiamate1} alt="Tiamate Coffee" className="w-[200px] md:w-[220px] rounded" />
        </div>

        <div className="w-full md:w-1/2 md:px-4 mb-6 md:mb-0" style={{ margin: '0 -20px' }}>
          <p className="text-sm text-[#5a4230] mb-2">
            A Tiamate oferece 2 modelos <br /> de franquia personalizados.
          </p>
          <h2 className="text-4xl md:text-xl lg:text-5xl font-bold text-[#a46d3a] font-archivo leading-tight">
            Escolha a Tiamate <br /> ideal para você
          </h2>
        </div>

        <div className="hidden md:flex md:w-[200px] lg:w-1/5 justify-center" style={{ marginLeft: '-30px' }}>
          <img src={tiamate2} alt="Tiamate Coffee To Go" className="w-[200px] md:w-[220px] rounded" />
        </div>
      </div>

      <div className="flex md:hidden flex-row justify-center gap-4 mt-6">
        <img src={tiamate1} alt="Tiamate Coffee" className="w-32 rounded" />
        <img src={tiamate2} alt="Tiamate Coffee To Go" className="w-32 rounded" />
      </div>
    </div>
  );
};

export default Modelo;
