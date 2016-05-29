import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.skills.helpers({


});

$(document).ready(function() {
  $('.html').css('width', '90%');
  $('.css').css('width', '90%');
  $('.jquery').css('width', '70%');
  $('.javascript').css('width', '50%');
  $('.adobe').css('width', '80%');
  $('.wordpress').css('width', '10%');
  $('.ui').css('width', '70%');
  $('.rwd').css('width', '80%');
});
