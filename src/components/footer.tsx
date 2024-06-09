import { IconButton } from "./buttons";

export function Footer(){
    return(
        <>
            <footer>
                <p>Icons por: <span><a href="https://icons8.com/">icons8.com</a></span></p>
                <p>Desenvolvido por: Maria Sofia.</p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/xofiaxinha">
                        <IconButton path="https://img.icons8.com/fluency-systems-filled/48/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://github.com/xofiaxinha">
                        <IconButton path="https://img.icons8.com/fluency-systems-filled/48/github.png" alt="github" />
                    </a>
                </div>
            </footer>
        </>
    )
}