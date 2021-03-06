import Alterer from './alterer.js'

/**
 * Suffix Alterer
 * Adds anything to end of a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
export default class SuffixAlterer extends Alterer {
	constructor() {
		super();
		this.name = 'suffix';
		this.accepts = ['string'];
	}

	/**
	 * alter()
	 * Changes resolved data based on options
	 * @param mixed resolved The data to change
	 * @param mixed options Any options sent in with the alterer
	 * @return mixed Changed resolved data
	 */
	alter(resolved, options) {
		return resolved + String(options);
	}
}
