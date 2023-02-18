import { ReactNode } from "react";

type TextElements = {
    above: Array<ReactNode>,
    content: Array<ReactNode>,
    after: Array<ReactNode>
}

type Gutter = {
    breakpoint: boolean;
    gitlense: String;
    quickfix: Array<String>;
}

type Props = {
    number: number;
    gutter: Gutter;
    text: TextElements;
}
import classNames from "classnames";

const getGitLenseStyle = (style: String): string => {
    switch(style) {
        case 'changed':
            return 'gitlense-changed';
        default:
            return '';
    }
}

export const Line = ({number, gutter, text}: Props) => {

    
    return (
        <div className="line" id={`line-${number}`}>
            <div className="gutter">

                {/* Unicode/SVG icon */}

                {/* Red circle : ● or ◯ */}
                <div 
                    className={classNames(
                        "gutter-breakpoint breakpoint",
                        {'mt-line': text.above.length > 0}
                    )}
                    data-active={gutter.breakpoint}
                ></div>

                <div className="gutter-linenumber">{text.above.length > 0 && <br />}{number + 1}</div>

                {/* Top : Full : Bottom : whole */}
                <div 
                    className={classNames(
                        'gutter-gitlens',
                        getGitLenseStyle(gutter.gitlense))}
                >
                    <div></div>
                </div>
                <div className="gutter-quickfix">
                    {gutter.quickfix.join('')}
                </div>
            </div>

            <div className="text">
                <div className="text-above hint">
{text.above.map((content, index) => (<pre key={`above-${index}`}>{content}</pre>))}               
                </div>
                <div className="text-inline">
                    <div className="text-content">
{text.content.map((content, index) => (<pre key={`content-${index}`}>{content}</pre>))}
                    </div>
                    <div className={classNames('text-after')}>
{text.after.map((content, index) => (<pre key={`content-${index}`}>{content}</pre>))}
                    </div>                      
                </div>
            </div>
        </div>
    );
}