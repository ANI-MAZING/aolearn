import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 mt-20 text-orange-500 rounded-full h-6 text-20px font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-1 lg:mt-2 tracking-wide">
          Why should you try{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            AO | Learn
          </span>
        </h2>
        <div className="flex mt-10 justify-center">



{/* <CodeCell
  className="rounded-lg w-1/2 h-full border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4" 
  cellId="1"
  appName="BetterIDEa-Code-Cell"
  code="print('Portable code cell ftw!')"
  onAOProcess={(pid)=> console.log("using process: ", pid)}
  onNewMessage={(msgs) => console.log("new messages: ", msgs)}
  onInbox={(inbox) => console.log("got inbox: ", inbox)}
/> */}

        {/* <source src={video1} type="video/mp4" /> */}

      </div>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FeatureSection;
