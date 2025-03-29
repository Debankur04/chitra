import Image from "next/image";
import { assets, stepsData } from "../../public/assets";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best text to image Generator</p>
        <Image
        src='/star_icon.svg'
        height={20}
        width={20}
        alt="Placeholder image"/>
      </div>

      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:mex-[700px] mx-auto mt-10 text-center">Words to <span className="text-blue-600">Crafts.</span></h1>
      <p className="text-center max-w-xl mx-auto mt-5">Unleash your creativity with AI. Turn your imagination into visiual art in seconds - just type, and watch the magic happen.</p>

      <button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">Generate Images
        <Image 
        src='/star_group.png'
        height={20}
        width={20}
        alt="Placeholder Image"/>
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6).fill('').map((item, index)=>(
          <Image 
          className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
          src={index% 2 === 0 ? assets.sample_img_2: assets.sample_img_1}
          key={index}
          height={90}
          width={90}
          alt="Placeholder Image"/>
        ))}
      </div>
      <p className="mt-2 text-neutral-500">Generated images from imagify</p>



      <div>
        <h1 className="text-3xl sm:text-4xl">
          How it works
        </h1>
        <p className="text-lg text-gray-600 mb-8">Transform Words Into Stunning Images</p>

        <div>
          {stepsData.map((item,index)=>(
            <div key={index}>
              <Image 
                
                src={item.icon}
                key={index}
                height={50}
                width={50}
                alt="Placeholder Image"/>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
