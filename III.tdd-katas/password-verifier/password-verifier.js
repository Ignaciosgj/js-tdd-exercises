class PasswordVerifier {
  constructor(password) {
    this.password = password;
    this.errors = [];
  }
  verify(){
    this.notNullVerifier(this.password);
    this.lengthVerifier(this.password);
    this.lowercaseVerifier(this.password);
    this.uppercaseVerifier(this.password);
    this.numberVerifier(this.password);

    if (this.errors.length < 2 && !(this.errors.includes("password should have one lowercase letter at least"))) return "OK";
    else return this.errors;

    // try {
    //   try {
    //     this.notNullVerifier(this.password);
    //     accumulator++
    //     this.lowercaseVerifier(this.password);
    //     accumulator++
    //   } catch (error) {
    //     throw error;
    //   }
    //   try {
    //     this.lengthVerifier(this.password);
    //     accumulator++;
    //   } catch (error) {
    //     this.errors.push(error.message);
    //   }
    //   try {
    //     this.uppercaseVerifier(this.password);
    //     accumulator++;
    //   } catch (error) {
    //     this.errors.push(error.message);
    //   }
    //   try {
    //     this.numberVerifier(this.password);
    //     accumulator++;
    //   } catch (error) {
    //     this.errors.push(error.message);
    //   }

    //   if(accumulator >= 3) return "OK"
    //   else return this.errors;

    // } catch (error) {
    //   return error.message;
    // }
  }

  notNullVerifier() {
    if (!this.password) throw new Error("password should not be null");
    return "OK";
  }

  lengthVerifier() {
    let errorMessage = "password should be larger than 8 chars"
    if (this.password.length < 8) {
      this.errors.push(errorMessage);
      return errorMessage;
    }
    return "OK";
  }

  uppercaseVerifier() {
    let errorMessage = "password should have one uppercase letter at least"
    let uppercase = new RegExp('.*[A-Z].*');
    if (!this.password.match(uppercase)) {
      this.errors.push(errorMessage);
      return errorMessage;
    }
    return "OK";
  }

  lowercaseVerifier() {
    let errorMessage = "password should have one lowercase letter at least"
    let lowercase = new RegExp('.*[a-z].*');
    if (!this.password.match(lowercase)) {
      this.errors.push(errorMessage);
      return errorMessage;
    }
    return "OK";
  }

  numberVerifier() {
    let errorMessage = "password should have one number at least"
    let number = new RegExp('.*[0-9].*');
    if (!this.password.match(number)) {
      this.errors.push(errorMessage);
      return errorMessage;
    }
    return "OK";
  }
}

module.exports = PasswordVerifier;
