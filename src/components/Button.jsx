export default function Button(props) {
    return (
        <button className="custom-button">
            {props.children}
        </button>
    );
}
