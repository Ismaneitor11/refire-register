import React , {Component} from 'react'
import ReactDom from 'react-dom'
import Typography from '@material-ui/core'

const styles = (theme) =>{
    return{
        container:{
            width:'500px',
            margin:'0 auto'
        }
    }
}

 class app extends Component{
     render(){
         const classes = this.props.classes
         return(
             <paper className={classes.container}>Registro de la comunidad
             <Typography
             variant='display1'
             color='blue'
             >
             </Typography>
             </paper>
         )
     }
 }

 App=withStyles(styles)(App)
 ReactDom.render