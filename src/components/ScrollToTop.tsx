import { useEffect, useState } from "react"
import { FaAngleUp } from "react-icons/fa6"


const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollTop = ()=> {
        window.scrollTo({top : 0, behavior : "smooth"})
    }    

    useEffect(()=> {
        window.addEventListener("scroll", toggleVisibility)
        return ()=> window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
       isVisible &&( <div className="fixed bottom-20 right-7 z-50">
          <button className="bg-brand p-2 shadow-md rounded-md cursor-pointer hover:shadow-lg" onClick={scrollTop}>
            <FaAngleUp className="text-xl text-white" />
          </button>  
        </div>)
    )
}

export default ScrollToTop