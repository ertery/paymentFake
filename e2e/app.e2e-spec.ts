import { PaymentAppPage } from './app.po';

describe('payment-app App', function() {
  let page: PaymentAppPage;

  beforeEach(() => {
    page = new PaymentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
