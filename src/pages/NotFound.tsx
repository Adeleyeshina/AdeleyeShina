import gsap from "gsap"
import { useEffect, useRef } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"


const NotFound = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate ()

  useEffect(()=> {
    const el = sectionRef.current

    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".notfound-element"), 
        {autoAlpha : 0, y : 40},
        {
          autoAlpha : 1, 
          y : 0,
          duration : 1,
          stagger : 0.3,
          ease : "power3.out"
        }
      )
    }

  }, [])

  
  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center md:min-h-[65vh] w-full p-6 pb-10 text-center gap-5">
      <FaExclamationTriangle className="text-7xl text-red-600 notfound-element" />
      <h1 className="text-5xl text-primarytext font-bold notfound-element">404</h1>
      <p className="text-xl notfound-element">Oops! The page you're looking for doesn't exist.</p>

      <button
        onClick={()=>navigate("/")}
        className="bg-brand/70 px-10 py-4 notfound-element text-white rounded-md text-xl cursor-pointer hover:bg-brand font-semibold">
        Go Home
      </button>
    </div>
  )
}

export default NotFound