// import { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ArrowRight, Heart, Star, Award, Briefcase, User } from 'lucide-react';

// const carouselItems = [
//   {
//     title: "An Experience",
//     subtitle: "People Love to Talk About",
//     content: "Premium fashion tech accessories that redefine style",
//     cta: "Explore Collection",
//     ceo: false,
//     icon: <Star className="w-8 h-8 text-emerald-500" />
//   },
//   {
//     title: "Crafted Precision",
//     subtitle: "Engineered Elegance",
//     content: "Smart wearable collections with IoT integration",
//     cta: "Discover Wearables",
//     ceo: false,
//     icon: <Award className="w-8 h-8 text-emerald-500" />
//   },
//   {
//     title: "Keshav Sharma",
//     subtitle: "CEO, StyleMart Innovations",
//     content: [
//       "NPTEL Gold Medalist in IoT (All India Rank 151)",
//       "Traffic Management System Architect",
//       "Expert in Data Structures & Algorithms"
//     ],
//     cta: "View Achievements",
//     ceo: true,
//     icon: <User className="w-8 h-8 text-emerald-500" />
//   },
//   {
//     title: "Style & Algorithm",
//     subtitle: "Smart Fashion Solutions",
//     content: "Collections optimized using advanced data patterns",
//     cta: "Shop Now",
//     ceo: false,
//     icon: <Heart className="w-8 h-8 text-emerald-500" />
//   },
//   {
//     title: "Luxury Meets Tech",
//     subtitle: "Next-Gen Accessories",
//     content: "Premium materials meet cutting-edge design",
//     cta: "Explore Techwear",
//     ceo: false,
//     icon: <Briefcase className="w-8 h-8 text-emerald-500" />
//   }
// ];

// const About = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animationDirection, setAnimationDirection] = useState('right');
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Auto-rotate carousel (every 3 seconds)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // changed from 5000ms to 3000ms
//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   const nextSlide = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setAnimationDirection('right');
//     setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 600);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setAnimationDirection('left');
//     setActiveIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 600);
//   };

//   const goToSlide = (index) => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setAnimationDirection(index > activeIndex ? 'right' : 'left');
//     setActiveIndex(index);

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 600);
//   };

//   const getItemPosition = (index) => {
//     if (index === activeIndex) return 'translate-x-0 opacity-100 scale-100';

//     if (animationDirection === 'right') {
//       return index < activeIndex ? '-translate-x-full opacity-0 scale-95' : 'translate-x-full opacity-0 scale-95';
//     } else {
//       return index < activeIndex ? '-translate-x-full opacity-0 scale-95' : 'translate-x-full opacity-0 scale-95';
//     }
//   };

//   return (
//     <div className='flex w-full h-full justify-center items-center bg-gray-50  py-12'>
//       <div className="w-full max-w-5xl relative overflow-hidden rounded-2xl shadow-xl">
//         <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8">
//           {/* Decorative background */}
//           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full opacity-50"></div>
//           <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-100 rounded-tr-full opacity-50"></div>

//           {/* Carousel Area */}
//           <div className="relative h-[34rem] flex items-center justify-center">
//             {carouselItems.map((item, index) => (
//               <div
//                 key={index}
//                 className={`absolute w-full px-6 transition-all duration-500 ease-in-out ${getItemPosition(index)}`}
//               >
//                 <div className="flex flex-col items-center justify-center p-8 space-y-6 text-center">
//                   <div className="p-3 bg-white rounded-full shadow-md mb-2">
//                     {item.icon}
//                   </div>

//                   <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 tracking-tight">
//                     {item.title}
//                   </h2>

//                   <p className="text-xl md:text-2xl text-emerald-600 font-medium">
//                     {item.subtitle}
//                   </p>

//                   {item.ceo ? (
//                     <div className="space-y-3 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
//                       {item.content.map((point, i) => (
//                         <div key={i} className="flex items-center text-slate-700">
//                           <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
//                           <p className="text-base">{point}</p>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-lg text-slate-700 max-w-2xl">
//                       {item.content}
//                     </p>
//                   )}

//                   <button className="mt-6 px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors shadow-lg flex items-center group">
//                     {item.cta}
//                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>

//                   {item.ceo && (
//                     <div className="mt-4 text-sm text-emerald-700 bg-white/50 px-4 py-2 rounded-full">
//                       <p>Elite Certifications in Discrete Mathematics & IoT • Edunet Foundation Alumni</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Controls */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white hover:bg-emerald-50 p-3 rounded-full shadow-lg text-emerald-700 transition-all hover:scale-110"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white hover:bg-emerald-50 p-3 rounded-full shadow-lg text-emerald-700 transition-all hover:scale-110"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Indicators */}
//           <div className="absolute -bottom-1 left-0 right-0 flex justify-center pb-6">
//             <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
//               {carouselItems.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     activeIndex === index
//                       ? 'bg-emerald-600 w-8'
//                       : 'bg-emerald-200 hover:bg-emerald-300'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react'
import image from '../../public/image.png'


const About = () => {
  return (
    <div className='w-full flex justify-around items-center'>
      <div className='w-[980px] ml-6 h-screen border border-black flex flex-col justify-center items-center'>
          <div className='text-center flex flex-col items-center justify-center'>
              <h1 className='text-slate-800 font-bold text-[1.693rem] text-center'>Who I Am <br /> and What Inspires Me</h1>
              <div className='h-1 w-10 bg-green-300 mt-2 text-center'></div>
          </div>
          <div className='mt-5'>
            <img src={image} className='w-[260px] rounded-xl' alt="" />

          </div>
      </div>
    </div>
  )
}

export default About