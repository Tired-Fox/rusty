import { useMemo } from "react"
import { EditorGutter } from "./EditorGutter"
import { EditorLine } from "./EditorLine"

type Line = {
    breakpoint: false,
    text: string,
    symbol: string,
}

type Data = Array<Line>

type Props = {
    text: string
}

export const Editor = ({ text }: Props) => {
    const lines = text.split("\\n");
    let gutterLines: Array<Line> = []
    for (const _ in lines) {
        gutterLines.push({'breakpoint':false, 'symbol': ''})
    }
    console.log(lines)

    return (
        <>
            <div className="editor">
                <div>
                    {
                        gutterLines.map((gutter, index) => {
                            return (
                                <EditorGutter number={index} breakpoint={gutter.breakpoint} symbol={gutter.symbol} />
                            )
                        })
                    }
                </div>
                <div contentEditable="true" spellCheck="false">
                    {
                        lines.map(line => {
                            return (
                                <EditorLine key={line} text={line} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}