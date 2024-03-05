export function Section({
  heading,
  takeref,
  givemeBorder = true,
  children,
}: {
  heading: string;
  takeref: any;
  givemeBorder?: boolean;
  children: any;
}) {
  return (
    <div
      className={`w-[75%] h-fit mx-12 pb-3 pt-12 space-y-3 ${
        givemeBorder ? "border-t-[1px]" : null
      } border-slate-600`}
      ref={takeref}
    >
      <p className="text-[24px] font-bold">{heading}</p>
      {children}
      <br />
    </div>
  );
}
