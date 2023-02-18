type Props = {
    breakpoint: boolean,
    symbol: string,
    number: number
}

export async function getStaticProps() {
    return {
      props: {
        breakpoint: false,
        number: 1,
        symbol: ''
      }, // will be passed to the page component as props
    };
  }

export const EditorGutter = ({ breakpoint, number, symbol }:Props) => {

    return (
        <>
            <div>
                <div className="symbol">{ symbol }</div>
                <div className="breakpoint">{ breakpoint ? '⬤' : '' }</div>
                <div className="line-number">{number}</div>
            </div>
        </>
    )
}