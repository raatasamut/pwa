/**
 * It returns a React component that renders an SVG
 * @param  - `className` - the class name to apply to the SVG element.
 * @returns A JSX element.
 */
export default function HomeSvg({ className }: shu.Svg): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 30.341 18.108"
      fill="currentColor"
      className={className}
    >
      <path
        id="Path_57"
        data-name="Path 57"
        d="M112.987,15.848l-12.4,12.4a2.02,2.02,0,0,1-2.856-2.856L108.7,14.42,97.73,3.448A2.02,2.02,0,1,1,100.587.591l12.4,12.4a2.019,2.019,0,0,1,0,2.856Z"
        transform="translate(0.75 114.329) rotate(-90)"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
