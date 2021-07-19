export function MessageForm(props) {
    return (
        <div className="MessageForm">
            <input type="text" value={props.value} onChange={props.handleChange} />
            <button onClick={props.changeMessageList}>Click</button>
        </div>
    );
}
