import React ,{ Component} from 'react'
import ReactDom from 'react-dom'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import DatePicker from 'material-ui-pickers/DatePicker'
import Button from '@material-ui/core/Button'


const styles = (theme) =>{
    return{
        container:{
            width:'500px',
            margin:'0 auto',
            padding: theme.spacing.unit * 2
        },
        textField:{
            marginBottom: theme.spacing.unit * 2
        }
    }
}

 class App extends Component{
     render(){
         const classes = this.props.classes
         return(
             <MuiPickersUtilsProvider utils={MomentUtils} >
             <Paper className={classes.container}>
             <Typography
             variant='display1'
             color='secondary'
             >Registro de la comunidad
             </Typography>
             <TextField
             label='Nombre'
             name='nombre'
             fullWidth
             className={classes.textField}
             />
             <TextField
             label='Apellido'
             name='apellido'
             fullWidth
             className={classes.textField}
             />
              <TextField
             label='Celular'
             name='celular'
             fullWidth
             className={classes.textField}
             />
              <TextField
             label='Correo'
             name='correo'
             fullWidth
             className={classes.textField}
             />
             <DatePicker>
             </DatePicker>
             <TextField
             label='Intereses'
             name='intereses'
             fullWidth
             select
             className={classes.textField}
             >
             <MenuItem>Firebase</MenuItem>
             <MenuItem>JavaScript</MenuItem>
             <MenuItem>CSS</MenuItem>
            </TextField>
            <Button variant='contained' color='primary'>
            Registrar
            </Button>


             </Paper>
             </MuiPickersUtilsProvider>
         )
     }
 }
 App=withStyles(styles)(App)
 ReactDom.render(
 <App/>,
 document.getElementById('root')
 )