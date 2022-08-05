import { forwardRef } from "react";

const FancyButton = forwardRef(({ href, text, onClick }, ref) => (
  <a
    ref={ref}
    href={href}
    onClick={onClick}
    className="mt-2 px-3 text-xl font-semibold text-white"
  >
    {text}
  </a>
));

export default FancyButton;
