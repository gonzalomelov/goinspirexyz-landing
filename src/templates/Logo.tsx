import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg
        className="mr-1 stroke-current text-primary-500"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21h6" />
        <path d="M10 24h4" />
        <path d="M15.5 5.5l1.5 1.5" />
        <path d="M12 4a6 6 0 0 1 6 6c0 3-3 5-3 7h-6c0-2-3-4-3-7a6 6 0 0 1 6-6z" />
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
