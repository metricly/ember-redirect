import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import window from 'ember-window-mock';

moduleForAcceptance('External routes will redirect - Integration');

test('basic route to route redirects are performed correctly', function(assert) {
  assert.expect(1);

  visit('/external').then(() => {
    assert.equal(window.location.href, 'https://github.com/thoov/ember-redirect');
  });
});
