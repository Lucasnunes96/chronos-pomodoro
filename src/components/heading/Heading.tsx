import styles from './Heading.module.css';

type HeadingProps = {
    children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
    return (
        <>
            <h1 className={styles.heading}> {children} </h1>
            <p className={styles.paragrafo}> Esse é o observatório ODP</p>
        </>
    )
}