import isValidImei from './isValidImei';
import { expect } from 'chai';

describe('isValidImei.js', () => {
	it('should return true on valid imei', () => {
		const validImei = '123456789012345';
		const result = isValidImei(validImei);
		expect(result).to.equal(true);
	});
	it('should return false on invalid imei', () => {
		const invalidImei = '12345678901234';
		const result = isValidImei(invalidImei);
		expect(result).to.equal(false);
	});
});
