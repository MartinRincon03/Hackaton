import InputF from '../atoms/InputF';
import LabelF from '../atoms/LabelF';
import '../../assets/styles/formReporter.css'

function WrapperInput( {msn, type, placeholder, name} ) {
    return ( 
        <div className="wrapper_input">
            <LabelF msn={msn} />
            <InputF type={type} placeholder={placeholder} name={name} />
        </div>
     );
}

export default WrapperInput;