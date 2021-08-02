import { useRef, useEffect } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
// import { inputRef } from './../../App';

export function MessageForm(props) {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [props.messageList]);

    return (
        <>
            <Grid item xs={12} sm={12}>
                <div className="MessageForm">
                    <TextField
                        inputRef={inputRef}
                        id="inputMessageForm"
                        label="Your text"
                        variant="outlined"
                        value={props.value}
                        onChange={props.handleChange}
                    />
                    <Button
                        style={{ margin: '10px 0 0 20px' }}
                        variant="contained"
                        color="primary"
                        onClick={props.changeMessageList}
                    >
                        Click Me!
                    </Button>
                </div>
            </Grid>
        </>
    );
}
