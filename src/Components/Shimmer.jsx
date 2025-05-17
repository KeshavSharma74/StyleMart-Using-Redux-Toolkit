const Shimmer = () => {
  return (
    <div className='grid grid-cols-4 gap-x-5 gap-y-5'>
      {Array.from({ length: 12 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

const ShimmerCard = () => {
  return (
    <div className="w-full rounded-3xl overflow-hidden bg-gray-200 animate-pulse shadow-2xl">
      <div className="h-[170px] bg-gray-300"></div>
      <div className="p-3 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-4/5"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        </div>
        <div className="flex justify-between items-center mb-1">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-8 bg-gray-300 rounded-xl w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
  