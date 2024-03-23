import { combineClasses } from '../../../utils/format'

// import style from '../Hero/Herobtn.module.css'
export const Button = (props) =>{
    const classNames = {
        primary : 'btns',
        outline: 'fill',
        secondary : "btn-secondary",
        tertiary : 'btn-invert',
        green : 'btn-green',
        blue : 'btn-blue',
        grey : 'btn-grey', 
        black : 'btn-black',
    }

    const className = classNames[props.type] || classNames.primary 
    const classes = combineClasses(className, props.className, props.style)
    return( 

      props.onClick ?
      <button onClick= {props.onClick} className={ classes} >
        {props.children}
      </button> 
      :
      <a href='#/' className={classes }> {props.children}</a>
      )
 }

 