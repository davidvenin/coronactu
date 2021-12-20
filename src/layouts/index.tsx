import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

export const Layout: FunctionComponent<Props> = ({
  children,
  title,
}: Props) => {
  return (
    <section>
      <div className={"container"}>
        <h1 className={"text-40 font-semibold"}>{title}</h1>
        <div>{children}</div>
      </div>
    </section>
  );
};
