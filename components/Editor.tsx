import { Line } from "./Line";

type Props = {
    text: string;
}

export const Editor = ({ text }: Props) => {

    let lines = [
        <span key="content-2"><span>func print() -&gt; String</span> {'{'}</span>,
        <span key="content-1"><span>    <span style={{color: "cyan"}}>let</span> data</span><span className="hint">: &str</span> = <span style={{color: "rgb(0, 172, 0)", textDecoration: "underline red wavy 1px"}}>&quot;Some Data&quot;</span></span>,
        <span key="content-3">{'}'}</span>
    ]

    return (
        <>
            <div className="window font">
                {
                    lines.map((line, index) => (
                        <Line 
                            key={`line-el-${index}`}
                            number={index}
                            gutter={{
                                breakpoint: index === 1,
                                gitlense: index === 1 ? 'changed' : '',
                                quickfix: []
                            }}
                            text={{
                                above: index === 0 ? [<span key="content-above">@contract(null-&gt;String)</span>]:[],
                                content: [line],
                                after: index===1 ? [<span key="content-after" className="error-invalid">Missing semicolon</span>]:index===0?[<span key="content-after" className="error-warning">Func of return type &apos;String&apos; must return a &apos;String&apos;</span>]:[]
                            }}
                        />
                    ))
                }
            </div>
        </>
    )
}