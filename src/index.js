import React ,{ Component} from 'react'
import ReactDom from 'react-dom'
import {withStyles} from '@material-ui/core/styles'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import styles from './styles'
import Form from './componenets/Form'



 class App extends Component{
     render(){

         return(
             <MuiPickersUtilsProvider utils={MomentUtils} >
             <Form classes={this.props.classes}/>
             </MuiPickersUtilsProvider>
         )
     }
 }
 App=withStyles(styles)(App)
 ReactDom.render(
 <App/>,
 document.getElementById('root')
 )