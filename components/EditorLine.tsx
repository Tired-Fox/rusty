import { Source_Code_Pro } from "@next/font/google";
import { ReactNode } from "react";

const SCP = Source_Code_Pro({style: "normal", weight: "400"})

export async function getStaticProps() {
  return {
    props: {
      lineNumber: 1,
      text: 'print("Hello World")',
      gutter: "⬤",
    }, // will be passed to the page component as props
  };
}

type Props = {
  text: string;
  children?: ReactNode
};

export const EditorLine = ({ text, children }: Props) => {
  return (
    <>
        <div className={SCP.className}>
            <div className="editor-line">
                <div className="editor-line-text">
                    {text}
                    {children}
                </div>
            </div>
        </div>
    </>
  );
};
