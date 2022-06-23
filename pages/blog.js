function Blog({ posts }) {
    return (
        <ul>
            {posts.data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}

export default Blog