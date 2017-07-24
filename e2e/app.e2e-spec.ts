import { LeaderboardPage } from './app.po';

describe('leaderboard App', () => {
  let page: LeaderboardPage;

  beforeEach(() => {
    page = new LeaderboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
