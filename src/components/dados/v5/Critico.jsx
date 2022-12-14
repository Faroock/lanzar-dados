export const Critico = (props) => {
    const color = props.color || "white";
    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={66.667}
      height={114.667}
      viewBox="0 0 50 86"
      {...props}
    >
      <g fill={color}>
        <path d="M14.9 9.9c-3.3 3.3-3.9 4.5-3.9 8 0 4.6 1.1 7.3 4.4 11l2.1 2.4-3-.6c-1.6-.3-4-.8-5.2-1.2-1.8-.6-2.5-.2-3.2 1.6-1.3 3.4.4 6.2 2.9 4.9 4.8-2.5 14.3 0 12.3 3.3-1.4 2.2-.3 31.9 1.3 37.7 1.4 4.9 1.7 5.3 2.9 3.7 2.4-3.3 3.8-14.2 3-24.2-.4-5.2-.4-9.5 0-9.5.3 0 1.5.5 2.6 1.1 1.6.8 1.9 1.6 1.4 4.1-.6 2.8-.5 3 1.1 2.3 2.4-1 4.4-1 6.8 0 1.6.7 1.7.5 1.1-2.3-.5-2.5-.2-3.3 1.4-4.2 3-1.6 2.6-3-.9-3-2.3 0-3.1-.5-3.6-2.5-.8-3.2-2-3.2-2.8 0-.5 2-1.3 2.5-3.7 2.5-1.8 0-2.9-.5-2.8-1.3.1-.6-.2-2-.6-3.1-1.5-3.4.7-5.1 6.6-5.1 3 .1 6.1.3 6.9.5 1.1.4 1.4-.2 1.3-2.4-.3-4-1.8-5.4-4.3-3.8-1.1.6-2.9 1.2-4 1.2-2 0-2-.1.4-3.8C42.5 16.3 37 6 24.1 6c-4.9 0-5.7.3-9.2 3.9zm14.8 4.3c3 2.8 3.1 8.6.2 11.9l-2 2.4.5-3.1c.4-2.3 0-3.6-1.4-4.9-1.8-1.6-2-1.6-4.4.2-2.8 2-3.1 2.9-1.6 3.8 1.2.7 1.4 3.5.2 3.5-1.4 0-4.2-5.7-4.2-8.4 0-3.5 4.1-7.6 7.6-7.6 1.5 0 3.8 1 5.1 2.2z" />
        <path d="M10.6 42.5c-.5 2-1.3 2.5-3.6 2.5-3.5 0-3.9 1.4-.9 3 1.6.9 1.9 1.7 1.4 4.2-.6 2.8-.5 3 1.1 2.3 1.1-.4 2.6-.8 3.4-.8.8 0 2.3.4 3.4.8 1.6.7 1.7.5 1.1-2.3-.5-2.5-.2-3.3 1.4-4.2 3-1.6 2.6-3-.9-3-2.3 0-3.1-.5-3.6-2.5-.3-1.4-1-2.5-1.4-2.5-.4 0-1.1 1.1-1.4 2.5z" />
      </g>
    </svg>
  )
}