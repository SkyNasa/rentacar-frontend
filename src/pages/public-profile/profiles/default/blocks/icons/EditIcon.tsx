import React from 'react';

interface IconProps {
  className?: string;
}

const EditIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_687_14378)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.303 24.8063L23.9411 12.3425C24.4649 11.6704 24.6511 10.8933 24.4765 10.1021C24.3252 9.38279 23.8829 8.69888 23.2194 8.18004L21.6014 6.89475C20.1929 5.77454 18.4469 5.89246 17.4459 7.17775L16.3633 8.58214C16.2237 8.75784 16.2586 9.01725 16.4332 9.15875C16.4332 9.15875 19.1686 11.352 19.2268 11.3992C19.4131 11.576 19.5527 11.8119 19.5877 12.0949C19.6459 12.6491 19.2617 13.1679 18.6914 13.2387C18.4236 13.274 18.1676 13.1915 17.9813 13.0382L15.1062 10.7506C14.9665 10.6457 14.757 10.6681 14.6406 10.8096L7.80785 19.6533C7.36552 20.2075 7.2142 20.9268 7.36552 21.6225L8.23853 25.4077C8.28509 25.6081 8.45969 25.7496 8.66922 25.7496L12.5105 25.7025C13.2089 25.6907 13.8607 25.3723 14.303 24.8063ZM19.6818 23.6275H25.9454C26.5565 23.6275 27.0535 24.131 27.0535 24.7501C27.0535 25.3703 26.5565 25.8727 25.9454 25.8727H19.6818C19.0707 25.8727 18.5737 25.3703 18.5737 24.7501C18.5737 24.131 19.0707 23.6275 19.6818 23.6275Z" fill="#A1A5B7"/>
</g>
<defs>
<clipPath id="clip0_687_14378">
<rect width="32" height="32" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

  );
};

export default EditIcon;