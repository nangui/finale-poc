module.exports = {
  name: 'employee',
  exposes: {
    './Module': 'apps/employee/src/app/remote-entry/entry.module.ts',
  },
};
