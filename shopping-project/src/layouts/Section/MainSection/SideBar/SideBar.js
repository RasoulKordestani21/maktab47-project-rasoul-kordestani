import React, { useState, useEffect } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { getSideBarData } from '../../../../axios/Axios';
import { connect } from 'react-redux'


export function SideBar(props) {
    const [state, setState] = useState(false);
    const [data, setData] = useState('');
    const [counter, setCounter] = useState(0);
    const [requestFlag, setRequestFlag] = useState(false)
    useEffect(async () => {
        await getSideBarData().then(res => setData(res.data));
        // toggleDrawer(this.props.toggle);
    }, [state])

    useEffect(() => {
        console.log('update');
        if (counter !== 0) {
            setState(true) 
        }
        setCounter(counter + 1);
    }, [props.toggle]);

    const toggleDrawer = (open) => (event) => {
        setState(open);
    };

                   

    return (
        <div key={"rigth"}>
            <Button onClick={toggleDrawer(true)}>{"right"}</Button>
            <SwipeableDrawer
                anchor={"right"}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
               
                {data &&
                    (data.map(ele =>
                    (<div>
                        <h1>
                            {ele.group}
                        </h1>
                        <ul>
                            {ele.items.map(ele1 => (
                                <li>
                                    {ele1}
                                </li>
                            ))}
                        </ul>
                    </div>
                    )
                    )
                    )
                }
            </SwipeableDrawer>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state.sideBarFlagReducer.toggle)
    return {
       toggle:state.sideBarFlagReducer.toggle
    }
  }

  export default connect(mapStateToProps)(SideBar);