export class Search {
  constructor(formId, recipes) {
    this.form = document.getElementById(formId);
    this.recipes = recipes;
    this.init();
    this.filteredRecipes = [];
  }

  init() {
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  }

  validatePhone(phone) {
    return /^(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})$/.test(phone);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.form.querySelector("#name").value;
    const email = this.form.querySelector("#email").value;
    const phone = this.form.querySelector("#phone").value;

    console.log(name);

    if (name.trim() === "") {
      alert("You must enter a valid name");
      return;
    }

    alert("Form submitted successfully!");
    this.form.reset();
  }
}
