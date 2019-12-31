import  React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from  './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";



const style ={
    marginTop: '16px'
};



const layout = (props) => (
    <Auxiliary>
        <Toolbar/>
        <main className={classes.Content}
              style={style} >
            {props.children}
        </main>
    </Auxiliary>
);



export default layout;