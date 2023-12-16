describe('Component1', () => {
    beforeAll(async () => {
      await page.goto('http://localhost:3000');
    });
  
    // existing tests
  
    it('should not submit form when quantity is less than 1', async () => {
      // Fill all fields
      await page.select('select[name="serverType"]', 'Dedicated');
      await page.select('select[name="duration"]', '1');
      await page.fill('input[type="number"]', '0'); // Quantity less than 1
      await page.select('select[name="location"]', 'USA');
      await page.select('select[name="os"]', 'Windows');
      await page.select('select[name="services"]', 'Backup');
      await page.click('input[type="submit"]');
      // Check that the alert message is not displayed
      await expect(page).not.toMatch('You have selected: 2 Dedicated server(s) with Windows for 1 month(s) in USA. Additional services: Backup. Total cost: $0');
    });
  
    it('should reset form after submission', async () => {
      // Fill all fields
      await page.select('select[name="serverType"]', 'Dedicated');
      await page.select('select[name="duration"]', '1');
      await page.fill('input[type="number"]', '2');
      await page.select('select[name="location"]', 'USA');
      await page.select('select[name="os"]', 'Windows');
      await page.select('select[name="services"]', 'Backup');
      await page.click('input[type="submit"]');
      // Check that the form fields are reset
      await expect(page).toMatchElement('select[name="serverType"]', { text: '--Please choose an option--' });
      await expect(page).toMatchElement('select[name="duration"]', { text: '--Please choose an option--' });
      await expect(page).toMatchElement('input[type="number"]', { value: '1' });
      await expect(page).toMatchElement('select[name="location"]', { text: '--Please choose an option--' });
      await expect(page).toMatchElement('select[name="os"]', { text: '--Please choose an option--' });
      await expect(page).toMatchElement('select[name="services"]', { text: '--Please choose an option--' });
    });
    it('should submit form with email', async () => {
        // Fill all fields
      await page.select('select[name="serverType"]', 'Dedicated');
      await page.select('select[name="duration"]', '1');
      await page.fill('input[type="number"]', '2');
      await page.select('select[name="location"]', 'USA');
      await page.select('select[name="os"]', 'Windows');
      await page.select('select[name="services"]', 'Backup');
      await page.fill('input[type="email"]', 'user@example.com');
      await page.click('input[type="submit"]');
      await expect(page).toMatch('You have selected: 2 Dedicated server(s) with Windows for 1 month(s) in USA. Additional services: Backup. Total cost: $0. A confirmation has been sent to user@example.com');
    });
    it('should submit form with payment method', async () => {
    // Fill all fields
    await page.select('select[name="serverType"]', 'Dedicated');
    await page.select('select[name="duration"]', '1');
    await page.fill('input[type="number"]', '2');
    await page.select('select[name="location"]', 'USA');
    await page.select('select[name="os"]', 'Windows');
    await page.select('select[name="services"]', 'Backup');
    await page.fill('input[type="email"]', 'user@example.com');
    await page.select('select[name="paymentMethod"]', 'Credit Card');
    await page.click('input[type="submit"]');
    await expect(page).toMatch('You have selected: 2 Dedicated server(s) with Windows for 1 month(s) in USA. Additional services: Backup. Total cost: $0. A confirmation has been sent to user@example.com. Payment method: Credit Card');
  });
  it('should submit form with payment method', async () => {
    // Fill all fields
    await page.select('select[name="serverType"]', 'Dedicated');
    await page.select('select[name="duration"]', '1');
    await page.fill('input[type="number"]', '2');
    await page.select('select[name="location"]', 'USA');
    await page.select('select[name="os"]', 'Windows');
    await page.select('select[name="services"]', 'Backup');
    await page.fill('input[type="email"]', 'user@example.com');
    await page.select('select[name="paymentMethod"]', 'Credit Card');
    await page.click('input[type="submit"]');
    await expect(page).toMatch('You have selected: 2 Dedicated server(s) with Windows for 1 month(s) in USA. Additional services: Backup. Total cost: $0. A confirmation has been sent to user@example.com. Payment method: Credit Card');
  });
  it('should submit form with discount code', async () => {
    // Fill all fields
    await page.select('select[name="serverType"]', 'Dedicated');
    await page.select('select[name="duration"]', '1');
    await page.fill('input[type="number"]', '2');
    await page.select('select[name="location"]', 'USA');
    await page.select('select[name="os"]', 'Windows');
    await page.select('select[name="services"]', 'Backup');
    await page.fill('input[type="email"]', 'user@example.com');
    await page.select('select[name="paymentMethod"]', 'Credit Card');
    await page.fill('input[type="text"]', 'DISCOUNT10');
    await page.click('input[type="submit"]');
    await expect(page).toMatch('You have selected: 2 Dedicated server(s) with Windows for 1 month(s) in USA. Additional services: Backup. Total cost: $0. A confirmation has been sent to user@example.com. Payment method: Credit Card. Discount code: DISCOUNT10');
  });
});