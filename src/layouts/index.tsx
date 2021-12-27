import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
  title: string;
}

export const Layout: FunctionComponent<Props> = ({
  children,
  title,
}: Props) => {
  return (
    <section className="relative min-h-[100vh]">
      <div className="relative z-50">
        <div className={"container"}>
          <h1 className={"text-30 font-semibold text-center"}>{title}</h1>
          <div>{children}</div>
        </div>
        <footer className={"mt-10 p-20 text-center text-12 text-gray"}>
          <p>
            Made with <span className={"text-red"}>love</span> by David V.
          </p>
        </footer>

        <div id="modal-root" />
      </div>
      <Image
        className="sticky -z-10"
        src="/images/bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
    </section>
  );
};
