import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CustomPhoneInput = ({header, value, setValue}) => {
  return (
    <div>
      <div>
        {header}
      </div>
      <PhoneInput
        country={'am'}
        value={value}
        onChange={(phone) => setValue(phone)}
        inputClass='text-black'
      />
    </div>
  );
};

export default CustomPhoneInput;