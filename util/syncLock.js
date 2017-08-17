// Generated by CoffeeScript 1.10.0
var locked, queue;

locked = false;

queue = [];

exports.lock = function(callback) {
  if (!locked) {
    locked = true;
    return callback();
  } else {
    return queue.push(callback);
  }
};

exports.release = function() {
  var callback;
  callback = queue.shift();
  if (callback) {
    return callback();
  } else {
    return locked = false;
  }
};