const Title = ({ heading }) => {
  return (
    // <div className="relative border-s-8 border-green-600 ps-3">
    //   <h2 className="text-6xl font-bold capitalize">{heading}</h2>
    //   <p className="absolute bottom-0 text-9xl opacity-5 -z-10 capitalize">{heading}</p>
    // </div>
    <div>
      <h1
        className="relative text-xl font-bold uppercase w-[150px] text-center m-auto whitespace-nowrap border-2 border-solid"
        style={{ padding: "5px 11px 3px 11px" }}
      >
        {heading}
      </h1>
    </div>
  );
};

export default Title;
