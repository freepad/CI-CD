const { I } = inject();

module.exports = {
  visitLoginPage(){
  I.visit('login')
  },
  FillName(name){
  I.FillField('//input[@id="username"]', name)
  },
  FillPassword(password){
    I.FillField('//input[@id="password"]', password)
    },
  clickButton(){
    I.click('//button[@type="button"][contains(@class, "base-button")][@tabindex="4"]')
  },
}

