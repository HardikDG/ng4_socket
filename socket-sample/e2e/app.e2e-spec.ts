import { SocketSamplePage } from './app.po';

describe('socket-sample App', () => {
  let page: SocketSamplePage;

  beforeEach(() => {
    page = new SocketSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
