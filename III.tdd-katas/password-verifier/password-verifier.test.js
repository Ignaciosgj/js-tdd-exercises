const PasswordVerifier = require("./password-verifier")

describe("For the function passwordVerifier", () => {
  it("if function 'passwordVerifier' doesn't recive parameters it will throw an error: password should not be null", () => {
    //arrange
    const passwordVerifier = new PasswordVerifier(null);
    expected = "password should not be null";

    //act & assert
    expect(() => passwordVerifier.notNullVerifier()).toThrow(expected);
  });

  it("given the input 'passwrd' it will throw an error: password should be larger than 8 chars", () => {
    //arrange
    const passwordVerifier = new PasswordVerifier("passwrd");
    const expected = "password should be larger than 8 chars"

    //act & assert
    expect(passwordVerifier.lengthVerifier()).toBe(expected);
  });

  it("given the input 'password' it will throw an error: password should have one uppercase letter at least", () => {
    //arrange
    const passwordVerifier = new PasswordVerifier("password");
    const expected = "password should have one uppercase letter at least";

    //act & assert
    expect(passwordVerifier.uppercaseVerifier()).toBe(expected);
  });

  it("given the input 'PASSWORD1' it will throw an error: password should have one lowercase letter at least", () => {
    //arrange
    const passwordVerifier = new PasswordVerifier("PASSWORD1");
    const expected = "password should have one lowercase letter at least";

    //act & assert
    expect(passwordVerifier.lowercaseVerifier()).toBe(expected);
  });

  it("given the input 'Password' it will throw an error: password should have one number at least", () => {
    //arrange
    const passwordVerifier = new PasswordVerifier("Password");
    const expected = "password should have one number at least"

    //act & assert
    expect(passwordVerifier.numberVerifier()).toBe(expected);
  });

  it("given the input 'Password1' it will return 'OK'", () => {
    //arrange
    const passwordVerifier = new PasswordVerifier("Password1");
    const expected = "OK";

    //act & assert 
    expect(passwordVerifier.verify()).toEqual(expected);
  });

  it("given the input 'Password' it will return 'OK'", () => {
    //arrange
    const passwordVerifier = new PasswordVerifier("Password");
    const expected = "OK";

    //act & assert
    expect(passwordVerifier.verify()).toEqual(expected);
  });

  it("given the input 'PASSWORD1' it will contain lowercase error", () => {
    //arrange
    const passwordVerifier = new PasswordVerifier("PASSWORD1");
    const expected = "password should have one lowercase letter at least";

    //act & assert
    expect(passwordVerifier.verify()).toContain(expected);
  });

  it("given the input 'asd' it will contain length, uppercase and number error", () => {
    //arrange
    const passwordVerifier = new PasswordVerifier("asd");

    //act & assert
    expect(passwordVerifier.verify()).toContain("password should be larger than 8 chars");
    expect(passwordVerifier.verify()).toContain("password should have one uppercase letter at least");
    expect(passwordVerifier.verify()).toContain("password should have one number at least");
  });
})