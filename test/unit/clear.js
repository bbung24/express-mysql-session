var chai = require('chai')
var expect = chai.expect

var sessionStore = require('../session-store.js')
var TestManager = require('../test-manager.js')

describe('SessionStore#clear(cb)', function() {

	before(TestManager.tearDown)
	before(TestManager.setUp)
	after(TestManager.tearDown)

	describe('when sessions exist', function() {

		before(TestManager.populateSessions)

		it('should delete all existing sessions', function(done) {

			sessionStore.clear(function(error) {

				expect(error).to.equal(undefined)

				sessionStore.length(function(error, count) {

					expect(error).to.equal(null)
					expect(count).to.equal(0)
					done()

				})

			})

		})

	})

})