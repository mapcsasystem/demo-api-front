export class RegExpValidation {
  static email =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  static onlyNumbers = /^[0-9]+$/;
  static onlyNumbersFloats = /^[0-9]{1,10}$|^[0-9]{1,10}\.[0-9]{1,2}$/;
  static urlValid =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  static onlyNumbersLettersUppercase = /^[A-Z0-9]+$/;
  static onlyLettersUppercase = /^[A-Z]+$/;
  static notSpaceStartEndString = /^[^\s].+[^\s]$/;
  static password = /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
}
