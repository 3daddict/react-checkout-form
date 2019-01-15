import React from 'react';
import { Input } from "reactstrap";

class stateOptions extends React.Component {
    render() {
		return (
			<Input className="custom-select" type="select" name="coSelectState" id="coState">
                <option value="" disabled="">State</option>
				<option data-code="AL" value="Alabama">Alabama</option>
				<option data-code="AK" value="Alaska">Alaska</option>
				<option data-code="AS" value="American Samoa">American Samoa</option>
				<option data-code="AZ" value="Arizona">Arizona</option>
				<option data-code="AR" value="Arkansas">Arkansas</option>
				<option data-code="CA" value="California">California</option>
				<option data-code="CO" value="Colorado">Colorado</option>
				<option data-code="CT" value="Connecticut">Connecticut</option>
				<option data-code="DE" value="Delaware">Delaware</option>
				<option data-code="DC" value="District of Columbia">District of Columbia</option>
				<option data-code="FM" value="Federated States of Micronesia">Federated States of Micronesia</option>
				<option data-code="FL" value="Florida">Florida</option>
				<option data-code="GA" value="Georgia">Georgia</option>
				<option data-code="GU" value="Guam">Guam</option>
				<option data-code="HI" value="Hawaii">Hawaii</option>
				<option data-code="ID" value="Idaho">Idaho</option>
				<option data-code="IL" value="Illinois">Illinois</option>
				<option data-code="IN" value="Indiana">Indiana</option>
				<option data-code="IA" value="Iowa">Iowa</option>
				<option data-code="KS" value="Kansas">Kansas</option>
				<option data-code="KY" value="Kentucky">Kentucky</option>
				<option data-code="LA" value="Louisiana">Louisiana</option>
				<option data-code="ME" value="Maine">Maine</option>
				<option data-code="MH" value="Marshall Islands">Marshall Islands</option>
				<option data-code="MD" value="Maryland">Maryland</option>
				<option data-code="MA" value="Massachusetts">Massachusetts</option>
				<option data-code="MI" value="Michigan">Michigan</option>
				<option data-code="MN" value="Minnesota">Minnesota</option>
				<option data-code="MS" value="Mississippi">Mississippi</option>
				<option data-code="MO" value="Missouri">Missouri</option>
				<option data-code="MT" value="Montana">Montana</option>
				<option data-code="NE" value="Nebraska">Nebraska</option>
				<option data-code="NV" value="Nevada">Nevada</option>
				<option data-code="NH" value="New Hampshire">New Hampshire</option>
				<option data-code="NJ" value="New Jersey">New Jersey</option>
				<option data-code="NM" value="New Mexico">New Mexico</option>
				<option data-code="NY" value="New York">New York</option>
				<option data-code="NC" value="North Carolina">North Carolina</option>
				<option data-code="ND" value="North Dakota">North Dakota</option>
				<option data-code="MP" value="Northern Mariana Islands">Northern Mariana Islands</option>
				<option data-code="OH" value="Ohio">Ohio</option>
				<option data-code="OK" value="Oklahoma">Oklahoma</option>
				<option data-code="OR" value="Oregon">Oregon</option>
				<option data-code="PW" value="Palau">Palau</option>
				<option data-code="PA" value="Pennsylvania">Pennsylvania</option>
				<option data-code="PR" value="Puerto Rico">Puerto Rico</option>
				<option data-code="RI" value="Rhode Island">Rhode Island</option>
				<option data-code="SC" value="South Carolina">South Carolina</option>
				<option data-code="SD" value="South Dakota">South Dakota</option>
				<option data-code="TN" value="Tennessee">Tennessee</option>
				<option data-code="TX" value="Texas">Texas</option>
				<option data-code="UT" value="Utah">Utah</option>
				<option data-code="VT" value="Vermont">Vermont</option>
				<option data-code="VI" value="Virgin Islands">Virgin Islands</option>
				<option data-code="VA" value="Virginia">Virginia</option>
				<option data-code="WA" value="Washington">Washington</option>
				<option data-code="WV" value="West Virginia">West Virginia</option>
				<option data-code="WI" value="Wisconsin">Wisconsin</option>
				<option data-code="WY" value="Wyoming">Wyoming</option>
				<option data-code="AA" value="Armed Forces Americas">Armed Forces Americas</option>
				<option data-code="AE" value="Armed Forces Europe">Armed Forces Europe</option>
				<option data-code="AP" value="Armed Forces Pacific">Armed Forces Pacific</option>
            </Input>
		);
	}
}

export default stateOptions;