export default function Title(props) {
    return (
        <div className="p-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold">
                {props.children}
            </h1>
        </div>
    )
}