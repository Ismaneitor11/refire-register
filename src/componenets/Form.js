import React ,{Component} from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import DatePicker from 'material-ui-pickers/DatePicker'
import Button from '@material-ui/core/Button'

export default class Form extends Component{
    render(){
        const classes = this.props.classes
        return(
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
        )
    }
}