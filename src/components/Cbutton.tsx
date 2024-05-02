"use client";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  classes?: string;
}

// classes,
// type,
// }: {
// children: React.ReactNode;
// funcHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
// classes?: string;
// type?: string;
// }) {

export default function Cbutton(props: ButtonProps) {
  const { classes, ...rest } = props;

  return (
    <button
      {...rest}
      className={`btn rounded-full py-2 capitalize text-white ${classes}`}
    />
    // <button
    //   className={`btn rounded-full py-2 capitalize ${classes} text-white`}
    // >

    //   {children}
    // </button>
  );
}
