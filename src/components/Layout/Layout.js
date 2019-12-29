import  React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
//import classes from  './Layout.css';



const style ={
    marginTop: '16px'
};



const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, Sidebar, Backrop</div>
        <div //className={classes.Content}
            style={style} >
            {props.children}
        </div>
    </Auxiliary>
);



export default layout;