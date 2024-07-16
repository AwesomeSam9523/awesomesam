import Image from "next/image";
import './styles.css';

function TechStackIcon({icon, name}: {icon: string, name: string}) {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 m-2 flex items-center justify-center transform transition-transform duration-500 rotate-y-180">
      <Image src={icon} width={50} height={50} alt={name} className="w-full h-full" />
    </div>
  )
}

export default TechStackIcon;
