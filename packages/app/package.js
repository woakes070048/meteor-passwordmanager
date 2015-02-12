Package.describe({
  summary: 'app base',
  version: '1.0.0',
  name: 'app',
});

Package.onUse(function (api) {

  var both = ['client', 'server'];

  api.use('underscore', both);
  api.use('iron:router', both);
  api.use('templating', 'client');
  api.use('jsgoyette:mediator', both);
  api.use('jsgoyette:spin', 'client');
  api.use('jsgoyette:layouts');

  api.addFiles('layouts/default.html', 'client');
  api.addFiles('layouts/footer.html', 'client');
  api.addFiles('layouts/nav.html', 'client');
  api.addFiles('layouts/nav.js', 'client');

  api.addFiles('routes.js', both);
});