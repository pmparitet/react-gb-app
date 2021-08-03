import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleСhangeNameAction } from '../../store/profile/actions';

export function Profile(props) {
    const toggleShow = useSelector((state) => state.toggle_status);
    const dispatch = useDispatch();

    const setToggleChange = useCallback(() => {
        dispatch(toggleСhangeNameAction());
    }, [dispatch]);

    return (
        <div>
            <h1>Profile</h1>
            <input type="checkbox" checked={toggleShow} value={toggleShow} onChange={setToggleChange} />
            <span>Toggle Status </span>
        </div>
    );
}
