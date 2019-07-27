import Link from 'next/link'

function WelcomePost() {
    return (
        <Link href={"/post/[pid]"} as="/post/abc">
            <a>Welcome to my post!</a>
        </Link>
    )

}

export default WelcomePost