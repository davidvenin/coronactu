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
        <h1 className={"text-30 font-semibold m-20"}>{title}</h1>
        <div>{children}</div>
      </div>
      <footer className={"mt-10 p-20 text-center text-12 text-gray"}>
        <p>
          Made with <span className={"text-red"}>love</span> by David V.
        </p>
      </footer>
      <div id="modal-root" />
    </section>
  );
};
