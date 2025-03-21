const { DragonWings, Dragon } = require('@strix/server');

DragonWings.init();

setTimeout(() => {
  const success = Dragon.set('test', 'test');
  if (success) {
    Dragon.get('test').then((_) => {
      Dragon.del('test');
    });
  }
}, 2000);
