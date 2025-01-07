import Image from 'next/image'

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-8 h-8 ${className}`}>
      <Image
        src="/logo.png"
        alt="Mini Website Builder Logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};

export default Logo;

