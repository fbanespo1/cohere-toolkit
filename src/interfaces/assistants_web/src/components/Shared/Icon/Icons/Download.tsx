import * as React from 'react';
import { SVGProps } from 'react';

import { cn } from '@/utils';

export const Download: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={cn('h-full w-full fill-inherit', className)}
    {...props}
  >
    <path
      d="M13.7 10.5268C13.8657 10.5268 14 10.6611 14 10.8268V13.4998C14 14.3282 13.3284 14.9998 12.5 14.9998H3.5C2.67157 14.9998 2 14.3282 2 13.4998V9.1125C2 8.94681 2.13431 8.8125 2.3 8.8125H2.7C2.86569 8.8125 3 8.94681 3 9.1125V13.4998C3 13.776 3.22386 13.9998 3.5 13.9998H12.5C12.7761 13.9998 13 13.776 13 13.4998V10.8268C13 10.6611 13.1343 10.5268 13.3 10.5268H13.7Z"
      fill="inherit"
    />
    <path
      d="M7.63385 5.90504C7.51593 5.88258 7.43062 5.77949 7.43062 5.65946L7.43062 1.39171C7.43062 1.17491 7.60366 0.999158 7.81712 0.999154L8.20362 0.999146C8.41708 0.999141 8.59013 1.17489 8.59013 1.3917L8.59013 5.78508C8.59013 5.94191 8.44741 6.06001 8.29335 6.03066L7.63385 5.90504Z"
      fill="inherit"
    />
    <path
      d="M7.45312 11.7324C6.21485 10.4748 4.97779 9.21576 3.73982 7.95773C3.58888 7.80443 3.58888 7.55588 3.73982 7.40258L4.01312 7.125C4.16405 6.9717 4.40877 6.9717 4.55971 7.125L8.5 11.125L8.00034 12.125C7.90122 12.1252 7.80205 12.0868 7.72642 12.01L7.45312 11.7324Z"
      fill="inherit"
    />
    <path
      d="M8.54654 11.7324C9.78481 10.4748 11.0219 9.21576 12.2598 7.95773C12.4108 7.80443 12.4108 7.55588 12.2598 7.40258L11.9865 7.125C11.8356 6.9717 11.5909 6.9717 11.44 7.125L7.5 11.125L7.99932 12.125C8.09844 12.1252 8.19761 12.0868 8.27324 12.01L8.54654 11.7324Z"
      fill="inherit"
    />
    <path
      d="M8.38631 6.87942C8.50422 6.90187 8.58953 7.00497 8.58953 7.125L8.58953 10.7318C8.58953 10.9486 8.41649 11.1244 8.20303 11.1244L7.81653 11.1244C7.60307 11.1244 7.43003 10.9486 7.43003 10.7318L7.43003 6.99938C7.43003 6.84255 7.57275 6.72445 7.7268 6.7538L8.38631 6.87942Z"
      fill="inherit"
    />
  </svg>
);