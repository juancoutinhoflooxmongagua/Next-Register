import Title from "./Title";

export default function Layout(props) {
    return (
        <div>
            <Title>{props.title}</Title>
            <div>
                {props.children}
            </div>
        </div>
    )
}