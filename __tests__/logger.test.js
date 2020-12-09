
const loggerMiddleWare = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); //spy on the next method

  beforeEach(() => {
    //attach to the console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    //put the console back
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    loggerMiddleWare(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  })
})