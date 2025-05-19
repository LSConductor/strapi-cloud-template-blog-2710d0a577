'use strict';

/**
 *  teacher-program routes
 */
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/teacher-programs',
      handler: 'teacher-program.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/teacher-programs/:id',
      handler: 'teacher-program.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/teacher-programs',
      handler: 'teacher-program.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/teacher-programs/:id',
      handler: 'teacher-program.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/teacher-programs/:id',
      handler: 'teacher-program.delete',
      config: {
        policies: [],
      },
    },
  ],
};
