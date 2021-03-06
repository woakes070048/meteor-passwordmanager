import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/retrieve/:_id', {

  name: 'secure-retrieve',

  action(params) {
    BlazeLayout.render('layout', {
      content: 'secureRetrieve',
    });
  },

});

FlowRouter.route('/create', {

  name: 'secure-create',

  action() {
    BlazeLayout.render('layout', {
      content: 'secureCreate',
    });
  }

});
