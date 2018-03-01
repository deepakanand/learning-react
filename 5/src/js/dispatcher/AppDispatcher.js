var Dispatcher = require('flux').Dispatcher
var assign = require('object-assign')

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action){
    var payload = {
      source: 'VIEW_ACTION',
      action: action
    }
    this.dispatch(payload)
  },

  handleServerAction(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action,
    })
  }
})

module.exports = AppDispatcher
