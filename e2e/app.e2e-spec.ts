import { UsersMessagePage } from './app.po';

describe('users-message App', () => {
  let page: UsersMessagePage;

  beforeEach(() => {
    page = new UsersMessagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
