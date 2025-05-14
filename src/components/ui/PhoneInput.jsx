import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputField = ({
                             id,
                             label,
                             value,
                             onChange,
                             error,
                         }) => {
    // Custom handler to adapt react-phone-input-2 to our form's onChange handler format
    const handlePhoneChange = (phone, country) => {
        // Create a synthetic event to match the expected format
        const syntheticEvent = {
            target: {
                id,
                value: phone
            }
        };

        onChange(syntheticEvent);
    };

    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <div className="custom-phone-input">
                <PhoneInput
                    country={'am'}
                    value={value}
                    onChange={handlePhoneChange}
                    inputClass={`phone-input-field ${error ? "input-error" : ""}`}
                    containerClass="phone-input-container"
                    buttonClass="phone-dropdown-button"
                    dropdownClass="phone-dropdown"
                    defaultMask=".........."
                    placeholder=""
                    inputProps={{
                        id: id,
                        name: id,
                    }}
                />
            </div>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default PhoneInputField;