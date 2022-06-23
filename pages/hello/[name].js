import { useRouter } from 'next/router'

const Hello = (props) => {
    return <p>Hello {props.name}</p>
}

export default Hello

export async function getStaticPaths() {
    return {
        paths: [
            { params: { name: 'World' } },
            { params: { name: 'Mario' } },
            { params: { name: 'Zio' } }
        ],
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    return {
        props: {
            name: params.name
        }
    }
}