

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-xl lg:mt-2 ">
      <h1 className="text-4xl sm:text-2xl lg:text-2xl tracking-[15px] text-center">Welcome to AO | Learn</h1>
      <h1 className="text-4xl sm:text-6xl lg:text-8xl mt-8 text-center tracking-wide bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Build Train Elevate
        
        {/* <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
        </span> */}
      </h1>
      <p className="mt-10 text-md text-center text-neutral-500 max-w-3xl">
      A dynamic ecosystem for effortless model building, training, and deployment. AO | Learn empowers innovators with intuitive tools 
      </p>

      <div className="flex mt-20 justify-center">
      <iframe className="rounded-lg w-[800px] h-[500px] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4" 
        src="https://ide.betteridea.dev/aolearn?app-name=aolearn-Landing&code=AOlearn=require(%22aolearn%22)%0A%20--%20Example%20data%0A%20local%20X%20=%20{%0A%20{1,%202},%0A%20{2,%203},%0A%20{3,%204},%0A%20{4,%205}%0A%20}%0A%20local%20y%20=%20{2,%203,%204,%205}%0A%20%0A%20--%20Linear%20Regression%0A%20local%20theta%20=%20AOlearn.linear_regression.fit_linear(X,%20y,%200.01,%201000)%0A%20print({%22Linear%20Regression%20Coefficients:%22,%20table.unpack(theta)})%0A%20local%20prediction%20=%20AOlearn.linear_regression.predict_linear(theta,%20{5,%206})%0A%20print({%22Linear%20Regression%20Prediction%20for%20{5,%206}:%22,%20prediction})%0A&nowallet=true" 
        frameborder="0"></iframe>
        {/* <iframe className="rounded-lg w-[500px] h-[500px] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4" 
        src="https://ide.betteridea.dev/aolearn?app-name=aolearn-Landing&code=AOlearn=require(%22aolearn%22)%0A%20--%20Example%20data%0A%20local%20X%20=%20{%0A%20{1,%202},%0A%20{2,%203},%0A%20{3,%204},%0A%20{4,%205}%0A%20}%0A%20local%20y%20=%20{2,%203,%204,%205}%0A%20%0A%20--%20Linear%20Regression%0A%20local%20theta%20=%20AOlearn.linear_regression.fit_linear(X,%20y,%200.01,%201000)%0A%20print({%22Linear%20Regression%20Coefficients:%22,%20table.unpack(theta)})%0A%20local%20prediction%20=%20AOlearn.linear_regression.predict_linear(theta,%20{5,%206})%0A%20print({%22Linear%20Regression%20Prediction%20for%20{5,%206}:%22,%20prediction})%0A&nowallet=true" 
        frameborder="0"></iframe> */}
        </div>

        <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          See tutorial
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>

        
      </div>

    </div>
  );
};

export default HeroSection;
